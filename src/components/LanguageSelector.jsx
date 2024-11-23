import {
  Box,
  Button,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import PropTypes from "prop-types";
import { LANGUAGE_VERSIONS } from "../constants";

const languages = Object.entries(LANGUAGE_VERSIONS);
const ACTIVE_COLOR = "blue.400";

const LanguageSelector = ({ language, onSelect }) => {
  const menuBg = useColorModeValue("white", "#110c1b");
  const inactiveBg = useColorModeValue("transparent", "transparent");
  const activeBg = useColorModeValue("gray.100", "gray.900");
  const versionColor = useColorModeValue("gray.500", "gray.600");

  return (
    <Box ml={2} mb={4}>
      <Menu isLazy>
        <MenuButton as={Button} textTransform="capitalize">
          {language}
        </MenuButton>
        <MenuList bg={menuBg}>
          {languages.map(([lang, version]) => (
            <MenuItem
              key={lang}
              color={lang === language ? ACTIVE_COLOR : ""}
              bg={lang === language ? activeBg : inactiveBg}
              _hover={{
                color: ACTIVE_COLOR,
                bg: activeBg,
              }}
              onClick={() => onSelect(lang)}
            >
              <Text textTransform="capitalize">{lang}</Text>
              &nbsp;
              <Text as="span" color={versionColor} fontSize="sm">
                ({version})
              </Text>
            </MenuItem>
          ))}
        </MenuList>
      </Menu>
    </Box>
  );
};

LanguageSelector.propTypes = {
  language: PropTypes.string.isRequired,
  onSelect: PropTypes.func.isRequired,
};

export default LanguageSelector;
