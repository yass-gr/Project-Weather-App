export const weatherIcons = {
    'clear-day': `<svg class="day-icon" viewBox="0 0 24 24" aria-hidden="true">
      <circle class="icon-fill" cx="12" cy="12" r="5"/>
      <g class="icon-stroke">
        <line x1="12" y1="1" x2="12" y2="4"/>
        <line x1="12" y1="20" x2="12" y2="23"/>
        <line x1="4.22" y1="4.22" x2="6.34" y2="6.34"/>
        <line x1="17.66" y1="17.66" x2="19.78" y2="19.78"/>
        <line x1="1" y1="12" x2="4" y2="12"/>
        <line x1="20" y1="12" x2="23" y2="12"/>
        <line x1="4.22" y1="19.78" x2="6.34" y2="17.66"/>
        <line x1="17.66" y1="6.34" x2="19.78" y2="4.22"/>
      </g>
    </svg>`,
    'clear-night': `<svg class="day-icon" viewBox="0 0 24 24" aria-hidden="true">
      <path class="icon-fill" d="M12 3c-4.97 0-9 4.03-9 9s4.03 9 9 9 9-4.03 9-9c0-.46-.04-.92-.1-1.36a5.389 5.389 0 0 1-4.4 2.26 5.403 5.403 0 0 1-3.14-9.8c-.44-.06-.9-.1-1.36-.1z"/>
    </svg>`,
    'partly-cloudy-day': `<svg class="day-icon" viewBox="0 0 24 24" aria-hidden="true">
      <circle class="icon-fill" cx="8" cy="10" r="4"/>
      <g class="icon-stroke">
        <line x1="8" y1="3" x2="8" y2="5"/>
        <line x1="8" y1="15" x2="8" y2="17"/>
        <line x1="3" y1="10" x2="5" y2="10"/>
        <line x1="11" y1="10" x2="13" y2="10"/>
        <line x1="4.5" y1="5.5" x2="5.8" y2="6.8"/>
        <line x1="10.2" y1="13.2" x2="11.5" y2="14.5"/>
        <line x1="3" y1="14.5" x2="4.3" y2="13.2"/>
        <line x1="11.5" y1="5.5" x2="10.2" y2="6.8"/>
      </g>
      <path class="icon-fill-cloud" d="M19.35 10.04A7.49 7.49 0 0 0 12 4C9.11 4 6.6 5.64 5.35 8.04A5.994 5.994 0 0 0 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96z"/>
    </svg>`,
    'partly-cloudy-night': `<svg class="day-icon" viewBox="0 0 24 24" aria-hidden="true">
      <path class="icon-fill" d="M12 3c-3.5 0-6.5 2-7.5 5 .5.5 1 1.5 1 2.5 0 2.5-2 4.5-4.5 4.5 1.5.5 3.5 1 5.5 1 4.5 0 8-3.5 8-8 0-3.5-2.5-7-7.5-7.5 1 .5 3 1.5 5 3z"/>
      <path class="icon-fill-cloud" d="M19.35 10.04A7.49 7.49 0 0 0 12 4C9.11 4 6.6 5.64 5.35 8.04A5.994 5.994 0 0 0 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96z"/>
    </svg>`,
    'cloudy': `<svg class="day-icon" viewBox="0 0 24 24" aria-hidden="true">
      <path class="icon-fill-cloud" d="M19.35 10.04A7.49 7.49 0 0 0 12 4C9.11 4 6.6 5.64 5.35 8.04A5.994 5.994 0 0 0 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96z"/>
    </svg>`,
    'rain': `<svg class="day-icon" viewBox="0 0 24 24" aria-hidden="true">
      <path class="icon-fill-cloud" d="M17.92 7.02C17.45 4.18 14.97 2 12 2 9.82 2 7.83 3.18 6.78 5.06 4.09 5.41 2 7.74 2 10.5 2 13.53 4.47 16 7.5 16h10.5c2.48 0 4.5-2.02 4.5-4.5 0-2.34-1.79-4.27-4.08-4.48z"/>
      <circle class="icon-fill-rain" cx="7" cy="19" r="1.5"/>
      <circle class="icon-fill-rain" cx="12" cy="21" r="1.5"/>
      <circle class="icon-fill-rain" cx="17" cy="19" r="1.5"/>
      <line class="icon-stroke-rain" x1="7" y1="21" x2="7" y2="23"/>
      <line class="icon-stroke-rain" x1="12" y1="23" x2="12" y2="25"/>
      <line class="icon-stroke-rain" x1="17" y1="21" x2="17" y2="23"/>
    </svg>`,
    'snow': `<svg class="day-icon" viewBox="0 0 24 24" aria-hidden="true">
      <path class="icon-fill-cloud" d="M17.92 7.02C17.45 4.18 14.97 2 12 2 9.82 2 7.83 3.18 6.78 5.06 4.09 5.41 2 7.74 2 10.5 2 13.53 4.47 16 7.5 16h10.5c2.48 0 4.5-2.02 4.5-4.5 0-2.34-1.79-4.27-4.08-4.48z"/>
      <g class="icon-fill-snow">
        <circle cx="6" cy="20" r="1.5"/>
        <circle cx="12" cy="18" r="1.5"/>
        <circle cx="18" cy="20" r="1.5"/>
        <circle cx="9" cy="23" r="1.5"/>
        <circle cx="15" cy="23" r="1.5"/>
      </g>
    </svg>`,
    'fog': `<svg class="day-icon" viewBox="0 0 24 24" aria-hidden="true">
      <g class="icon-stroke-fog">
        <line x1="3" y1="8" x2="21" y2="8"/>
        <line x1="5" y1="12" x2="19" y2="12"/>
        <line x1="3" y1="16" x2="21" y2="16"/>
      </g>
    </svg>`,
    'wind': `<svg class="day-icon" viewBox="0 0 24 24" aria-hidden="true">
      <g class="icon-stroke-wind">
        <path d="M4 8h12c2 0 3-1 3-2.5S17 3 15 3"/>
        <path d="M4 12h16c2.5 0 4 1.5 4 3.5S21 19 18 19"/>
        <path d="M4 16h9c1.5 0 2 1 2 2s-.5 2-2 2"/>
      </g>
    </svg>`
}

export const mainWeatherIcons = {
    'clear-day': `<svg class="day-icon icon-main" viewBox="0 0 64 64" aria-hidden="true">
      <circle class="icon-fill" cx="32" cy="32" r="14"/>
      <g class="icon-stroke">
        <line x1="32" y1="4" x2="32" y2="14"/>
        <line x1="32" y1="50" x2="32" y2="60"/>
        <line x1="4" y1="32" x2="14" y2="32"/>
        <line x1="50" y1="32" x2="60" y2="32"/>
        <line x1="12.2" y1="12.2" x2="19.8" y2="19.8"/>
        <line x1="44.2" y1="44.2" x2="51.8" y2="51.8"/>
        <line x1="12.2" y1="51.8" x2="19.8" y2="44.2"/>
        <line x1="44.2" y1="19.8" x2="51.8" y2="12.2"/>
      </g>
    </svg>`,
    'clear-night': `<svg class="day-icon icon-main" viewBox="0 0 64 64" aria-hidden="true">
      <path class="icon-fill" d="M32 8c-13.25 0-24 10.75-24 24s10.75 24 24 24 24-10.75 24-24c0-1.23-.11-2.45-.27-3.66a14.37 14.37 0 0 1-11.73 6.03 14.41 14.41 0 0 1-8.37-26.14c-1.17-.16-2.4-.23-3.63-.23z"/>
    </svg>`,
    'partly-cloudy-day': `<svg class="day-icon icon-main" viewBox="0 0 64 64" aria-hidden="true">
      <circle class="icon-fill" cx="22" cy="26" r="10"/>
      <g class="icon-stroke">
        <line x1="22" y1="8" x2="22" y2="13"/>
        <line x1="22" y1="39" x2="22" y2="44"/>
        <line x1="8" y1="26" x2="13" y2="26"/>
        <line x1="31" y1="26" x2="36" y2="26"/>
        <line x1="12.4" y1="14.2" x2="16.4" y2="18.2"/>
        <line x1="27.6" y1="34.8" x2="31.6" y2="38.8"/>
        <line x1="8" y1="37.8" x2="12" y2="33.8"/>
        <line x1="32" y1="13.8" x2="28" y2="17.8"/>
      </g>
      <path class="icon-fill-cloud" d="M51.6 27.1A20 20 0 0 0 32 10.7C24.3 10.7 17.6 15 14.3 21.4A16 16 0 0 0 0 37.3c0 8.8 7.2 16 16 16h34.7c7.4 0 13.3-6 13.3-13.3 0-7-5.5-12.9-12.4-12.9z"/>
    </svg>`,
    'partly-cloudy-night': `<svg class="day-icon icon-main" viewBox="0 0 64 64" aria-hidden="true">
      <path class="icon-fill" d="M32 8c-9.3 0-17.3 5.3-20 13.3 1.3 1.3 2.7 4 2.7 6.7 0 6.7-5.3 12-12 12 4 1.3 9.3 2.7 14.7 2.7 12 0 21.3-9.3 21.3-21.3 0-9.3-6.7-18.7-20-20 2.7 1.3 8 4 13.3 8z"/>
      <path class="icon-fill-cloud" d="M51.6 27.1A20 20 0 0 0 32 10.7C24.3 10.7 17.6 15 14.3 21.4A16 16 0 0 0 0 37.3c0 8.8 7.2 16 16 16h34.7c7.4 0 13.3-6 13.3-13.3 0-7-5.5-12.9-12.4-12.9z"/>
    </svg>`,
    'cloudy': `<svg class="day-icon icon-main" viewBox="0 0 64 64" aria-hidden="true">
      <path class="icon-fill-cloud" d="M51.6 27.1A20 20 0 0 0 32 10.7C24.3 10.7 17.6 15 14.3 21.4A16 16 0 0 0 0 37.3c0 8.8 7.2 16 16 16h34.7c7.4 0 13.3-6 13.3-13.3 0-7-5.5-12.9-12.4-12.9z"/>
    </svg>`,
    'rain': `<svg class="day-icon icon-main" viewBox="0 0 64 64" aria-hidden="true">
      <path class="icon-fill-cloud" d="M47.8 18.7C46.5 11.1 40.6 5.3 32 5.3c-5.8 0-11.1 3.1-13.6 8 0 0-6.9 3.9-6.9 13.9 0 8.1 6.6 14.7 14.7 14.7h28c6.6 0 12-5.4 12-12 0-6.2-4.8-11.4-10.9-12.2z"/>
      <circle class="icon-fill-rain" cx="18" cy="50" r="4"/>
      <circle class="icon-fill-rain" cx="32" cy="56" r="4"/>
      <circle class="icon-fill-rain" cx="46" cy="50" r="4"/>
      <line class="icon-stroke-rain" x1="18" y1="56" x2="18" y2="61"/>
      <line class="icon-stroke-rain" x1="32" y1="62" x2="32" y2="67"/>
      <line class="icon-stroke-rain" x1="46" y1="56" x2="46" y2="61"/>
    </svg>`,
    'snow': `<svg class="day-icon icon-main" viewBox="0 0 64 64" aria-hidden="true">
      <path class="icon-fill-cloud" d="M47.8 18.7C46.5 11.1 40.6 5.3 32 5.3c-5.8 0-11.1 3.1-13.6 8 0 0-6.9 3.9-6.9 13.9 0 8.1 6.6 14.7 14.7 14.7h28c6.6 0 12-5.4 12-12 0-6.2-4.8-11.4-10.9-12.2z"/>
      <g class="icon-fill-snow">
        <circle cx="16" cy="53" r="4"/>
        <circle cx="32" cy="48" r="4"/>
        <circle cx="48" cy="53" r="4"/>
        <circle cx="24" cy="61" r="4"/>
        <circle cx="40" cy="61" r="4"/>
      </g>
    </svg>`,
    'fog': `<svg class="day-icon icon-main" viewBox="0 0 64 64" aria-hidden="true">
      <g class="icon-stroke-fog">
        <line x1="8" y1="20" x2="56" y2="20"/>
        <line x1="12" y1="32" x2="52" y2="32"/>
        <line x1="8" y1="44" x2="56" y2="44"/>
      </g>
    </svg>`,
    'wind': `<svg class="day-icon icon-main" viewBox="0 0 64 64" aria-hidden="true">
      <g class="icon-stroke-wind">
        <path d="M10 20h32c5.3 0 8-2.7 8-6.7S45.3 6.7 40 6.7"/>
        <path d="M10 32h42c6.7 0 10.7 4 10.7 9.3 0 5.4-4 9.4-10.7 9.4"/>
        <path d="M10 44h24c4 0 5.3 2.7 5.3 5.3s-1.3 5.4-5.3 5.4"/>
      </g>
    </svg>`
}

export function getWeatherIcon(icon) {
    return weatherIcons[icon] || weatherIcons['cloudy']
}

export function getMainWeatherIcon(icon) {
    return mainWeatherIcons[icon] || mainWeatherIcons['cloudy']
}
