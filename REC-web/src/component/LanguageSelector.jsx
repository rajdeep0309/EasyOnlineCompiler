import {
    Button,
    Box,
    Text,
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    MenuItemOption,
    MenuGroup,
    MenuOptionGroup,
    MenuDivider,
  } from '@chakra-ui/react'
// import React, { version } from "react";
import { LANGUAGE_VERSION } from "../constants/Constants";
import { version } from 'react';

const ACTIVE_COLOR = "green.100";

const languages = Object.entries(LANGUAGE_VERSION);
export const LanguageSelector = ({ language, onSelect }) => {
  return (
    <>
      <Box mb={2}>
        <Text mb={1} fontSize="lg">
          Languages:
        </Text>
       <Menu isLazy>
          <MenuButton as={Button}>{language}</MenuButton>
          <MenuList bg="#110c1b"> 
        {languages.map(([lang, version]) => (
              <MenuItem key={lang} 
              color={
                lang===language?ACTIVE_COLOR: "grey.600"
              }
              bg={
                lang===language?"grey.900" : "transparent"
              }
              
              
              onClick={() => onSelect(lang)}>
                {lang}
                &nbsp;
                <Text as="span" color="grey.600" fontSize="sm">
                  {version}
                </Text>
        </MenuItem>
            ))}
          </MenuList>
         </Menu>
{/* .......................................................... */}
      </Box>
    </>
  );
};

// export default LanguageSelector;
