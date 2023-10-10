import React, { useState } from 'react';
import './darkTheme.css'


const DarkModeToggle = ({ darkMode, toggleDarkMode }: any) => {


    return (
        <button id="dark-mode-toggle">
            {darkMode === 'light' ? 'Light Mode' : 'Dark Mode'}
        </button>
    );
};

export default DarkModeToggle;