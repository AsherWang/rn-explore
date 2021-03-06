module.exports = {
    'extends': 'airbnb',
    'parser': 'babel-eslint',
    'globals': {
        '$config': 'readonly',
        '$t': 'readonly',
        'i18n': 'readonly',
        'api': 'readonly',
        'gScreen': 'readonly',
    },
    'plugins': [
        'react-hooks'
    ],
    'rules': {
        'react/prefer-stateless-function': [0],
        'global-require': [0],
        'no-console': [0],
        'react/jsx-filename-extension': [0],
        'class-methods-use-this': [0],
        'react/prop-types': [0],
        'react-hooks/rules-of-hooks': 'error',
        'react-hooks/exhaustive-deps': 'warn'
    }
};