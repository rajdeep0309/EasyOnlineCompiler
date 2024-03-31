import sys
import subprocess
import io   

def execute_python_code(code):
    orginal_stdout=sys.stdout
    sys.stdout=output_capture=io.StringIO()
    try:
        exec(code)
        output=output_capture.getvalue()
        print(output)
        return output
    except Exception as e:
        print(e)
        return str(e)
    finally:
        sys.stdout=orginal_stdout
# def execute_java_code(code):
#     try:
#         print(code)
#         with open('/temp/Main.java','w') as f:
#             f.write(code)
#         compile_result=subprocess.run(['javac','/temp/Main.java'],stdout=subprocess.PIPE,stderr=subprocess.PIPE)
#         print(compile_result.returncode)
#         if compile_result.returncode!=0:
#             return compile_result.stderr.decode('utf-8')
#         run_result=subprocess.run(['java','-classpath','/temp','Main'],stdout=subprocess.PIPE,stderr=subprocess.PIPE)
#         print(run_result.returncode)
#         return run_result.stdout.decode('utf-8')
#     except Exception as e:
#         print(e)
#         return str(e)
# def execute_cpp_code(code):
#     try:
#         print(code)
#         with open('/temp/Main.cpp','w') as f:
#             f.write(code)
#         compile_result=subprocess.run(['g++','/temp/Main.cpp','-o','/temp/Main'],stdout=subprocess.PIPE,stderr=subprocess.PIPE)
#         print(compile_result.returncode)
#         if compile_result.returncode!=0:
#             return compile_result.stderr.decode('utf-8')
#         run_result=subprocess.run(['/temp/Main'],stdout=subprocess.PIPE,stderr=subprocess.PIPE)
#         print(run_result.returncode)
#         return run_result.stdout.decode('utf-8')
#     except Exception as e:
#         print(e)
#         return str(e)
    
def handler(event, context):
    language = event.get('language', 'python')
    code = event.get('code', '')
    if(language == 'python'):
        result=execute_python_code(code)
    # elif language == 'java':
    #     result=execute_java_code(code)
    # elif language == 'cpp':
    #     result=execute_cpp_code(code)
    else:
        result="Invalid language"

    return {
        'statusCode': 200,
        'body': result
    }    
    