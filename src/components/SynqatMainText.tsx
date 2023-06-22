import { chakra } from '@chakra-ui/react'
import { MotionStack, transitions } from 'src/components/Motion'

export const SynqatMainText: FC = () => (
  <MotionStack
    layoutId="synqat-main-text"
    direction="row"
    align="center"
    justify="center"
    spacing={4}
    w="full"
    h="163px"
    transition={transitions.medium}
  >
    <svg
      width="50%"
      viewBox="0 0 372 163"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <chakra.path
        d="M112.12 123.696L111.315 125.527L111.327 125.532L111.339 125.537L112.12 123.696ZM99.32 114.096L97.7116 115.285L97.7116 115.285L99.32 114.096ZM94.712 101.552H92.712V101.59L92.7135 101.629L94.712 101.552ZM95.48 99.76L94.0658 98.3458L94.0658 98.3458L95.48 99.76ZM116.344 99.504L115.182 101.131L115.232 101.167L115.284 101.2L116.344 99.504ZM118.136 101.168L119.901 100.227L119.828 100.091L119.736 99.968L118.136 101.168ZM120.952 104.88L119.538 106.294L119.562 106.319L119.587 106.342L120.952 104.88ZM125.816 107.824L125.087 109.686L125.135 109.705L125.184 109.721L125.816 107.824ZM144.504 106.544L143.475 104.829L143.462 104.837L143.449 104.845L144.504 106.544ZM146.296 95.664L144.928 97.1231L144.953 97.1465L144.979 97.1692L146.296 95.664ZM139.64 92.336L138.991 94.2279L139.023 94.2388L139.056 94.2487L139.64 92.336ZM127.608 89.264L127.196 91.2211L127.209 91.2239L127.608 89.264ZM110.968 84.016L110.087 85.8116L110.107 85.8215L110.128 85.8309L110.968 84.016ZM100.6 75.44L98.9359 76.5494L98.9421 76.5587L98.9484 76.5679L100.6 75.44ZM101.368 48.176L99.752 46.9977L99.7439 47.0088L99.736 47.02L101.368 48.176ZM113.784 38.576L112.985 36.7423L112.985 36.7423L113.784 38.576ZM148.088 37.424L147.434 39.314L147.445 39.3178L148.088 37.424ZM159.48 43.568L160.76 42.0316L160.76 42.0315L159.48 43.568ZM166.392 51.76L164.624 52.6958L164.641 52.7272L164.659 52.7579L166.392 51.76ZM168.952 60.08H170.952V60.0488L170.951 60.0175L168.952 60.08ZM168.184 62L169.598 63.4142L169.653 63.3599L169.703 63.3016L168.184 62ZM146.936 62.256L146.042 64.0448L146.042 64.0449L146.936 62.256ZM145.144 60.592L143.214 61.1182L143.3 61.4313L143.48 61.7014L145.144 60.592ZM141.048 55.728L139.923 57.3818L139.961 57.4075L140 57.4313L141.048 55.728ZM123.768 55.6L124.828 57.296L124.837 57.2903L124.846 57.2845L123.768 55.6ZM122.36 66.096L120.849 67.4059L120.873 67.4337L120.898 67.4606L122.36 66.096ZM128.12 69.424L127.451 71.3089L127.46 71.3122L127.47 71.3154L128.12 69.424ZM139.256 72.368L138.83 74.322L138.859 74.3285L138.889 74.334L139.256 72.368ZM158.072 77.872L157.23 79.686L157.243 79.6922L157.257 79.6983L158.072 77.872ZM168.568 86.32L166.879 87.3911L166.885 87.4006L166.891 87.41L168.568 86.32ZM166.904 114.352L165.327 113.122L165.324 113.126L166.904 114.352ZM153.336 123.952L154.05 125.82L153.336 123.952ZM133.368 125.28C125.004 125.28 118.209 124.107 112.901 121.855L111.339 125.537C117.295 128.064 124.665 129.28 133.368 129.28V125.28ZM112.925 121.865C107.53 119.495 103.575 116.488 100.928 112.907L97.7116 115.285C100.868 119.555 105.446 122.948 111.315 125.527L112.925 121.865ZM100.928 112.907C98.2411 109.271 96.8642 105.471 96.7105 101.475L92.7135 101.629C92.9011 106.507 94.5963 111.07 97.7116 115.285L100.928 112.907ZM96.712 101.552C96.712 101.434 96.732 101.336 96.8942 101.174L94.0658 98.3458C93.204 99.2076 92.712 100.304 92.712 101.552H96.712ZM96.8942 101.174C97.1577 100.911 97.346 100.864 97.528 100.864V96.864C96.174 96.864 94.997 97.4146 94.0658 98.3458L96.8942 101.174ZM97.528 100.864H113.656V96.864H97.528V100.864ZM113.656 100.864C114.673 100.864 115.077 101.056 115.182 101.131L117.506 97.8765C116.417 97.0982 115.028 96.864 113.656 96.864V100.864ZM115.284 101.2C115.745 101.488 116.163 101.871 116.536 102.368L119.736 99.968C119.085 99.1001 118.308 98.373 117.404 97.808L115.284 101.2ZM116.371 102.109C117.161 103.589 118.226 104.982 119.538 106.294L122.366 103.466C121.289 102.388 120.477 101.307 119.901 100.227L116.371 102.109ZM119.587 106.342C121.086 107.74 122.936 108.845 125.087 109.686L126.545 105.962C124.771 105.267 123.378 104.409 122.317 103.418L119.587 106.342ZM125.184 109.721C127.497 110.493 130.243 110.848 133.368 110.848V106.848C130.52 106.848 128.231 106.521 126.448 105.927L125.184 109.721ZM133.368 110.848C138.459 110.848 142.616 110.07 145.559 108.243L143.449 104.845C141.442 106.09 138.175 106.848 133.368 106.848V110.848ZM145.533 108.259C148.603 106.417 150.344 103.721 150.344 100.272H146.344C146.344 102.113 145.525 103.599 143.475 104.829L145.533 108.259ZM150.344 100.272C150.344 97.8409 149.429 95.7481 147.613 94.1588L144.979 97.1692C145.893 97.9692 146.344 98.9485 146.344 100.272H150.344ZM147.664 94.2049C145.969 92.6164 143.408 91.3959 140.224 90.4233L139.056 94.2487C142.016 95.1534 143.892 96.1516 144.928 97.1231L147.664 94.2049ZM140.289 90.4441C137.186 89.3802 133.081 88.3361 128.007 87.3041L127.209 91.2239C132.205 92.2399 136.121 93.2438 138.991 94.2279L140.289 90.4441ZM128.02 87.3069C121.64 85.9638 116.245 84.2552 111.808 82.2011L110.128 85.8309C114.907 88.0435 120.605 89.8335 127.196 91.2211L128.02 87.3069ZM111.849 82.2204C107.578 80.1251 104.412 77.4757 102.252 74.3121L98.9484 76.5679C101.567 80.4016 105.313 83.4695 110.087 85.8116L111.849 82.2204ZM102.264 74.3306C100.139 71.1433 99.016 67.1146 99.016 62.128H95.016C95.016 67.7227 96.2821 72.5687 98.9359 76.5494L102.264 74.3306ZM99.016 62.128C99.016 57.3205 100.347 53.077 103 49.332L99.736 47.02C96.586 51.467 95.016 56.5249 95.016 62.128H99.016ZM102.984 49.3543C105.734 45.5835 109.572 42.5917 114.583 40.4097L112.985 36.7423C107.415 39.1682 102.976 42.5765 99.752 46.9977L102.984 49.3543ZM114.583 40.4097C119.565 38.2397 125.553 37.12 132.6 37.12V33.12C125.14 33.12 118.584 34.3043 112.985 36.7423L114.583 40.4097ZM132.6 37.12C138.319 37.12 143.253 37.8666 147.434 39.314L148.742 35.534C144.049 33.9094 138.657 33.12 132.6 33.12V37.12ZM147.445 39.3178C151.779 40.7898 155.349 42.729 158.2 45.1044L160.76 42.0315C157.467 39.287 153.442 37.1302 148.731 35.5302L147.445 39.3178ZM158.2 45.1044C161.114 47.5332 163.234 50.0687 164.624 52.6958L168.16 50.8242C166.478 47.6486 163.99 44.7228 160.76 42.0316L158.2 45.1044ZM164.659 52.7579C166.147 55.3426 166.88 57.7977 166.953 60.1425L170.951 60.0175C170.854 56.9009 169.88 53.8094 168.125 50.7621L164.659 52.7579ZM166.952 60.08C166.952 60.2134 166.917 60.405 166.665 60.6984L169.703 63.3016C170.475 62.4003 170.952 61.3119 170.952 60.08H166.952ZM166.77 60.5858C166.657 60.6982 166.537 60.768 166.264 60.768V64.768C167.527 64.768 168.687 64.3258 169.598 63.4142L166.77 60.5858ZM166.264 60.768H149.368V64.768H166.264V60.768ZM149.368 60.768C148.67 60.768 148.179 60.6414 147.83 60.4671L146.042 64.0449C147.058 64.5533 148.189 64.768 149.368 64.768V60.768ZM147.83 60.4671C147.518 60.311 147.167 60.0215 146.808 59.4826L143.48 61.7014C144.145 62.6985 144.988 63.5183 146.042 64.0448L147.83 60.4671ZM147.074 60.0658C146.388 57.5517 144.598 55.5641 142.096 54.0247L140 57.4313C141.936 58.6226 142.876 59.8776 143.214 61.1182L147.074 60.0658ZM142.173 54.0741C139.608 52.3305 136.36 51.552 132.6 51.552V55.552C135.837 55.552 138.221 56.2241 139.923 57.3818L142.173 54.0741ZM132.6 51.552C128.636 51.552 125.265 52.2674 122.69 53.9155L124.846 57.2845C126.538 56.202 129.054 55.552 132.6 55.552V51.552ZM122.708 53.904C119.99 55.6027 118.696 58.3025 118.696 61.616H122.696C122.696 59.4682 123.45 58.1573 124.828 57.296L122.708 53.904ZM118.696 61.616C118.696 63.7998 119.422 65.7592 120.849 67.4059L123.871 64.7861C123.08 63.8728 122.696 62.8455 122.696 61.616H118.696ZM120.898 67.4606C122.405 69.0754 124.667 70.3208 127.451 71.3089L128.789 67.5391C126.283 66.6499 124.704 65.6766 123.822 64.7314L120.898 67.4606ZM127.47 71.3154C130.306 72.2903 134.103 73.2908 138.83 74.322L139.682 70.414C135.022 69.3972 131.395 68.4351 128.77 67.5326L127.47 71.3154ZM138.889 74.334C146.563 75.7676 152.658 77.5632 157.23 79.686L158.914 76.058C153.929 73.7435 147.48 71.8697 139.623 70.402L138.889 74.334ZM157.257 79.6983C161.771 81.7134 164.92 84.3022 166.879 87.3911L170.257 85.2489C167.778 81.3404 163.931 78.2973 158.887 76.0457L157.257 79.6983ZM166.891 87.41C168.847 90.4196 169.896 94.3227 169.896 99.248H173.896C173.896 93.7626 172.726 89.0471 170.245 85.23L166.891 87.41ZM169.896 99.248C169.896 104.639 168.36 109.233 165.327 113.122L168.481 115.582C172.104 110.938 173.896 105.462 173.896 99.248H169.896ZM165.324 113.126C162.342 116.971 158.143 119.973 152.622 122.084L154.05 125.82C160.135 123.494 164.981 120.095 168.484 115.578L165.324 113.126ZM152.622 122.084C147.089 124.199 140.683 125.28 133.368 125.28V129.28C141.072 129.28 147.977 128.142 154.05 125.82L152.622 122.084ZM215.261 125.104L213.847 126.518L213.894 126.565L213.944 126.609L215.261 125.104ZM214.365 95.28H216.365V94.7728L216.123 94.3269L214.365 95.28ZM184.669 40.496L182.772 41.1285L182.827 41.2949L182.911 41.4491L184.669 40.496ZM184.413 39.856L182.516 40.4884L182.561 40.6233L182.624 40.7504L184.413 39.856ZM185.053 37.296L186.467 38.7102L186.467 38.7102L185.053 37.296ZM206.045 37.424L204.631 38.8382L204.719 38.9263L204.817 39.0027L206.045 37.424ZM207.453 39.088L205.556 39.7205L205.615 39.8987L205.707 40.0627L207.453 39.088ZM225.885 72.112L224.139 73.0867L225.885 76.2157L227.631 73.0867L225.885 72.112ZM244.317 39.088L246.063 40.0627L246.086 40.0231L246.106 39.9824L244.317 39.088ZM245.725 37.424L247.042 38.9292L247.048 38.924L247.054 38.9188L245.725 37.424ZM266.717 37.296L265.198 38.5976L265.248 38.6559L265.303 38.7102L266.717 37.296ZM267.357 39.856L265.46 39.2236L265.357 39.5314V39.856H267.357ZM267.229 40.496L268.986 41.4523L269.07 41.2966L269.126 41.1285L267.229 40.496ZM237.405 95.28L235.648 94.3237L235.405 94.7709V95.28H237.405ZM217.565 124C217.228 124 216.921 123.899 216.578 123.599L213.944 126.609C214.966 127.504 216.195 128 217.565 128V124ZM216.675 123.69C216.496 123.511 216.365 123.273 216.365 122.8H212.365C212.365 124.205 212.831 125.502 213.847 126.518L216.675 123.69ZM216.365 122.8V95.28H212.365V122.8H216.365ZM216.123 94.3269L186.427 39.5429L182.911 41.4491L212.607 96.2331L216.123 94.3269ZM186.566 39.8635C186.462 39.5513 186.343 39.2435 186.202 38.9616L182.624 40.7504C182.654 40.8098 182.705 40.9287 182.772 41.1285L186.566 39.8635ZM186.31 39.2235C186.289 39.1604 186.285 39.1176 186.285 39.088H182.285C182.285 39.5704 182.366 40.0396 182.516 40.4884L186.31 39.2235ZM186.285 39.088C186.285 38.9704 186.305 38.8724 186.467 38.7102L183.639 35.8818C182.777 36.7436 182.285 37.8402 182.285 39.088H186.285ZM186.467 38.7102C186.731 38.4468 186.919 38.4 187.101 38.4V34.4C185.747 34.4 184.57 34.9506 183.639 35.8818L186.467 38.7102ZM187.101 38.4H203.101V34.4H187.101V38.4ZM203.101 38.4C204.029 38.4 204.433 38.6406 204.631 38.8382L207.459 36.0098C206.292 34.8421 204.733 34.4 203.101 34.4V38.4ZM204.817 39.0027C205.126 39.243 205.325 39.4369 205.446 39.5799C205.57 39.7262 205.573 39.7736 205.556 39.7205L209.35 38.4555C208.99 37.3732 208.135 36.5161 207.273 35.8453L204.817 39.0027ZM205.707 40.0627L224.139 73.0867L227.631 71.1373L209.199 38.1133L205.707 40.0627ZM227.631 73.0867L246.063 40.0627L242.571 38.1133L224.139 71.1373L227.631 73.0867ZM246.106 39.9824C246.198 39.7985 246.454 39.444 247.042 38.9292L244.408 35.9188C243.631 36.5987 242.948 37.3535 242.528 38.1936L246.106 39.9824ZM247.054 38.9188C247.372 38.636 247.882 38.4 248.797 38.4V34.4C247.152 34.4 245.614 34.8466 244.396 35.9292L247.054 38.9188ZM248.797 38.4H264.797V34.4H248.797V38.4ZM264.797 38.4C264.965 38.4 265.056 38.4311 265.198 38.5976L268.236 35.9944C267.354 34.9662 266.165 34.4 264.797 34.4V38.4ZM265.303 38.7102C265.465 38.8724 265.485 38.9704 265.485 39.088H269.485C269.485 37.8402 268.993 36.7436 268.131 35.8818L265.303 38.7102ZM265.485 39.088C265.485 39.1176 265.481 39.1604 265.46 39.2236L269.254 40.4884C269.404 40.0396 269.485 39.5704 269.485 39.088H265.485ZM265.357 39.856C265.357 39.816 265.359 39.7871 265.361 39.7711C265.363 39.755 265.365 39.7482 265.364 39.7518C265.363 39.7552 265.361 39.7663 265.355 39.7858C265.35 39.8051 265.343 39.8309 265.332 39.8635L269.126 41.1285C269.245 40.7726 269.357 40.3292 269.357 39.856H265.357ZM265.472 39.5397L235.648 94.3237L239.162 96.2363L268.986 41.4523L265.472 39.5397ZM235.405 95.28V122.8H239.405V95.28H235.405ZM235.405 122.8C235.405 123.273 235.274 123.511 235.095 123.69L237.923 126.518C238.939 125.502 239.405 124.205 239.405 122.8H235.405ZM235.095 123.69C234.916 123.869 234.678 124 234.205 124V128C235.61 128 236.907 127.534 237.923 126.518L235.095 123.69ZM234.205 124H217.565V128H234.205V124ZM289.586 125.104L291 123.69L291 123.69L289.586 125.104ZM289.586 37.296L291 38.7102L291 38.7102L289.586 37.296ZM308.53 37.424L307.025 38.741L307.113 38.8413L307.213 38.9292L308.53 37.424ZM309.81 38.832L308.021 39.7264L308.066 39.817L308.121 39.9026L309.81 38.832ZM341.042 88.112L339.353 89.1826L343.042 95.0039V88.112H341.042ZM341.938 37.296L343.352 38.7102L343.352 38.7102L341.938 37.296ZM361.906 37.296L360.492 38.7102L360.492 38.7102L361.906 37.296ZM361.906 125.104L363.32 126.518L363.367 126.471L363.411 126.421L361.906 125.104ZM342.834 124.976L341.329 126.293L341.373 126.343L341.42 126.39L342.834 124.976ZM341.682 123.568L340.012 124.669L340.018 124.677L341.682 123.568ZM310.45 76.208L312.12 75.1069L308.45 69.5423V76.208H310.45ZM291.89 124C291.417 124 291.179 123.869 291 123.69L288.172 126.518C289.188 127.534 290.485 128 291.89 128V124ZM291 123.69C290.821 123.511 290.69 123.273 290.69 122.8H286.69C286.69 124.205 287.156 125.502 288.172 126.518L291 123.69ZM290.69 122.8V39.6H286.69V122.8H290.69ZM290.69 39.6C290.69 39.1272 290.821 38.8891 291 38.7102L288.172 35.8818C287.156 36.8975 286.69 38.1955 286.69 39.6H290.69ZM291 38.7102C291.179 38.5313 291.417 38.4 291.89 38.4V34.4C290.485 34.4 289.188 34.866 288.172 35.8818L291 38.7102ZM291.89 38.4H305.458V34.4H291.89V38.4ZM305.458 38.4C306.672 38.4 306.985 38.6953 307.025 38.741L310.035 36.107C308.88 34.7874 307.146 34.4 305.458 34.4V38.4ZM307.213 38.9292C307.519 39.1971 307.737 39.4092 307.882 39.5693C308.042 39.7453 308.054 39.7918 308.021 39.7264L311.599 37.9376C311.235 37.2092 310.528 36.515 309.847 35.9188L307.213 38.9292ZM308.121 39.9026L339.353 89.1826L342.731 87.0414L311.499 37.7614L308.121 39.9026ZM343.042 88.112V39.6H339.042V88.112H343.042ZM343.042 39.6C343.042 39.1272 343.173 38.8891 343.352 38.7102L340.524 35.8818C339.508 36.8975 339.042 38.1955 339.042 39.6H343.042ZM343.352 38.7102C343.531 38.5313 343.769 38.4 344.242 38.4V34.4C342.837 34.4 341.54 34.866 340.524 35.8818L343.352 38.7102ZM344.242 38.4H359.602V34.4H344.242V38.4ZM359.602 38.4C360.075 38.4 360.313 38.5313 360.492 38.7102L363.32 35.8818C362.304 34.866 361.007 34.4 359.602 34.4V38.4ZM360.492 38.7102C360.671 38.8891 360.802 39.1272 360.802 39.6H364.802C364.802 38.1955 364.336 36.8975 363.32 35.8818L360.492 38.7102ZM360.802 39.6V122.8H364.802V39.6H360.802ZM360.802 122.8C360.802 123.137 360.701 123.444 360.401 123.787L363.411 126.421C364.306 125.399 364.802 124.17 364.802 122.8H360.802ZM360.492 123.69C360.313 123.869 360.075 124 359.602 124V128C361.007 128 362.304 127.534 363.32 126.518L360.492 123.69ZM359.602 124H345.906V128H359.602V124ZM345.906 124C344.849 124 344.424 123.737 344.248 123.562L341.42 126.39C342.61 127.58 344.232 128 345.906 128V124ZM344.339 123.659C343.728 122.961 343.432 122.588 343.346 122.459L340.018 124.677C340.273 125.06 340.745 125.626 341.329 126.293L344.339 123.659ZM343.352 122.467L312.12 75.1069L308.78 77.3091L340.012 124.669L343.352 122.467ZM308.45 76.208V122.8H312.45V76.208H308.45ZM308.45 122.8C308.45 123.273 308.319 123.511 308.14 123.69L310.968 126.518C311.984 125.502 312.45 124.205 312.45 122.8H308.45ZM308.14 123.69C307.961 123.869 307.723 124 307.25 124V128C308.654 128 309.952 127.534 310.968 126.518L308.14 123.69ZM307.25 124H291.89V128H307.25V124Z"
        fill="accent"
      />
    </svg>

    <svg
      width="50%"
      viewBox="0 0 372 163"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <chakra.path
        d="M62.848 133.168L64.2622 131.754L64.2622 131.754L62.848 133.168ZM61.184 131.376L59.5883 132.582L59.617 132.62L59.6476 132.656L61.184 131.376ZM56.832 125.616L58.4277 124.41L57.562 123.264L56.1995 123.719L56.832 125.616ZM24.96 123.44L24.1427 125.265L24.1527 125.27L24.96 123.44ZM11.392 111.92L9.69444 112.977L9.70462 112.994L9.71511 113.01L11.392 111.92ZM6.144 92.464L4.14454 92.5105L4.14477 92.5202L4.14509 92.5299L6.144 92.464ZM6.144 70.32L4.14511 70.2534L4.14476 70.264L4.14452 70.2746L6.144 70.32ZM11.52 50.992L13.205 52.0693L13.209 52.0631L13.2129 52.0569L11.52 50.992ZM65.792 39.088L64.9624 40.9078L64.9624 40.9078L65.792 39.088ZM79.488 50.992L77.7951 52.0569L77.799 52.0631L77.803 52.0693L79.488 50.992ZM84.864 70.32L82.8651 70.3866L82.8655 70.3987L82.8661 70.4108L84.864 70.32ZM84.864 92.464L86.8617 92.5607L86.8618 92.5569L84.864 92.464ZM75.648 117.04L74.2128 115.647L73.0603 116.835L74.011 118.189L75.648 117.04ZM84.992 130.352L83.355 131.501L83.4549 131.643L83.5778 131.766L84.992 130.352ZM85.248 130.864L83.3506 131.496L83.3506 131.496L85.248 130.864ZM85.376 131.632H83.376V131.757L83.3915 131.88L85.376 131.632ZM84.736 133.424L83.3218 132.01L83.2675 132.064L83.2175 132.122L84.736 133.424ZM56.448 104.752L55.0773 103.296L55.0664 103.306L55.0557 103.316L56.448 104.752ZM61.056 91.696L59.0581 91.6052L59.0573 91.622L59.0568 91.6389L61.056 91.696ZM61.056 70.704L59.0565 70.7465L59.057 70.7728L59.0583 70.7991L61.056 70.704ZM58.88 60.976L57.1153 61.9172L57.122 61.9297L57.1288 61.9422L58.88 60.976ZM37.632 55.344L36.7114 53.5685L36.7114 53.5685L37.632 55.344ZM32.128 60.976L33.8792 61.9422L33.886 61.9297L33.8927 61.9172L32.128 60.976ZM29.952 70.704L31.9514 70.7516L31.9515 70.7465L29.952 70.704ZM29.952 91.696L27.9525 91.7414L27.9528 91.7531L29.952 91.696ZM34.432 104.752L33.0397 106.188L33.0504 106.198L33.0613 106.208L34.432 104.752ZM66.048 132.32C65.0693 132.32 64.5644 132.056 64.2622 131.754L61.4338 134.582C62.6676 135.816 64.296 136.32 66.048 136.32V132.32ZM64.2622 131.754C63.6052 131.097 63.0955 130.546 62.7204 130.096L59.6476 132.656C60.1258 133.23 60.7255 133.874 61.4338 134.582L64.2622 131.754ZM62.7797 130.17L58.4277 124.41L55.2363 126.822L59.5883 132.582L62.7797 130.17ZM56.1995 123.719C53.1141 124.747 49.5366 125.28 45.44 125.28V129.28C49.8768 129.28 53.8939 128.704 57.4645 127.513L56.1995 123.719ZM45.44 125.28C37.8031 125.28 31.2627 124.035 25.7673 121.61L24.1527 125.27C30.2626 127.965 37.3756 129.28 45.44 129.28V125.28ZM25.7773 121.615C20.4017 119.208 16.1814 115.619 13.0689 110.83L9.71511 113.01C13.2586 118.461 18.0836 122.552 24.1427 125.265L25.7773 121.615ZM13.0896 110.863C10.0761 106.025 8.39037 99.9044 8.14291 92.3981L4.14509 92.5299C4.40963 100.554 6.22257 107.404 9.69444 112.977L13.0896 110.863ZM8.14346 92.4175C8.05849 88.7637 8.016 85.1098 8.016 81.456H4.016C4.016 85.1408 4.05885 88.8257 4.14454 92.5105L8.14346 92.4175ZM8.016 81.456C8.016 77.8022 8.05849 74.1053 8.14348 70.3654L4.14452 70.2746C4.05885 74.044 4.016 77.7712 4.016 81.456H8.016ZM8.14289 70.3866C8.38982 62.9788 10.1125 56.9064 13.205 52.0693L9.83496 49.9147C6.27152 55.4882 4.41018 62.3012 4.14511 70.2534L8.14289 70.3866ZM13.2129 52.0569C16.3286 47.1038 20.5906 43.3947 26.0456 40.9078L24.3864 37.2682C18.2361 40.072 13.3674 44.2989 9.82708 49.9271L13.2129 52.0569ZM26.0456 40.9078C31.5402 38.4029 37.9888 37.12 45.44 37.12V33.12C37.5312 33.12 30.4972 34.4824 24.3864 37.2682L26.0456 40.9078ZM45.44 37.12C52.9801 37.12 59.4705 38.4042 64.9624 40.9078L66.6216 37.2682C60.5082 34.4812 53.4306 33.12 45.44 33.12V37.12ZM64.9624 40.9078C70.4174 43.3947 74.6794 47.1038 77.7951 52.0569L81.1809 49.9271C77.6406 44.2989 72.7719 40.072 66.6216 37.2682L64.9624 40.9078ZM77.803 52.0693C80.8955 56.9064 82.6182 62.9788 82.8651 70.3866L86.8629 70.2534C86.5978 62.3012 84.7365 55.4882 81.1731 49.9147L77.803 52.0693ZM82.8661 70.4108C83.0354 74.136 83.12 77.8177 83.12 81.456H87.12C87.12 77.7557 87.0339 74.0134 86.8619 70.2292L82.8661 70.4108ZM83.12 81.456C83.12 85.0943 83.0354 88.7327 82.8662 92.3711L86.8618 92.5569C87.0339 88.8567 87.12 85.1564 87.12 81.456H83.12ZM82.8663 92.3673C82.3704 102.616 79.4121 110.29 74.2128 115.647L77.0832 118.433C83.1479 112.184 86.3336 103.474 86.8617 92.5607L82.8663 92.3673ZM74.011 118.189L83.355 131.501L86.629 129.203L77.285 115.891L74.011 118.189ZM83.5778 131.766C83.4847 131.673 83.4248 131.591 83.3919 131.541C83.3579 131.49 83.3385 131.453 83.3311 131.438C83.3182 131.412 83.3267 131.425 83.3506 131.496L87.1454 130.232C87.0545 129.959 86.8519 129.384 86.4062 128.938L83.5778 131.766ZM83.3506 131.496C83.3717 131.56 83.376 131.602 83.376 131.632H87.376C87.376 131.15 87.295 130.68 87.1454 130.232L83.3506 131.496ZM83.3915 131.88C83.3955 131.913 83.3941 131.928 83.3939 131.929C83.3939 131.93 83.3945 131.925 83.3965 131.919C83.3985 131.914 83.3984 131.917 83.3901 131.93C83.3813 131.943 83.3613 131.97 83.3218 132.01L86.1502 134.838C87.0721 133.916 87.527 132.715 87.3606 131.384L83.3915 131.88ZM83.2175 132.122C83.0748 132.289 82.984 132.32 82.816 132.32V136.32C84.184 136.32 85.3732 135.754 86.2545 134.726L83.2175 132.122ZM82.816 132.32H66.048V136.32H82.816V132.32ZM45.44 110.848C50.3967 110.848 54.5938 109.336 57.8403 106.188L55.0557 103.316C52.6702 105.629 49.5287 106.848 45.44 106.848V110.848ZM57.8187 106.208C61.2638 102.966 62.8768 97.9952 63.0552 91.7531L59.0568 91.6389C58.8938 97.3434 57.4349 101.077 55.0773 103.296L57.8187 106.208ZM63.0539 91.7868C63.2258 88.0057 63.312 84.4339 63.312 81.072H59.312C59.312 84.3661 59.2275 87.877 59.0581 91.6052L63.0539 91.7868ZM63.312 81.072C63.312 77.7099 63.2258 74.2221 63.0537 70.6089L59.0583 70.7991C59.2275 74.3539 59.312 77.7781 59.312 81.072H63.312ZM63.0556 70.6615C62.966 66.4546 62.2044 62.8614 60.6312 60.0098L57.1288 61.9422C58.2862 64.0399 58.9753 66.9321 59.0565 70.7465L63.0556 70.6615ZM60.6447 60.0348C59.1123 57.1615 57.0016 54.9711 54.2966 53.5685L52.4554 57.1195C54.3584 58.1063 55.9171 59.6705 57.1153 61.9172L60.6447 60.0348ZM54.2966 53.5685C51.668 52.2055 48.6985 51.552 45.44 51.552V55.552C48.1548 55.552 50.476 56.0932 52.4554 57.1195L54.2966 53.5685ZM45.44 51.552C42.2565 51.552 39.332 52.2096 36.7114 53.5685L38.5526 57.1195C40.54 56.089 42.8208 55.552 45.44 55.552V51.552ZM36.7114 53.5685C34.0064 54.9711 31.8957 57.1615 30.3633 60.0348L33.8927 61.9172C35.0909 59.6705 36.6496 58.1063 38.5526 57.1195L36.7114 53.5685ZM30.3768 60.0098C28.8036 62.8614 28.042 66.4546 27.9525 70.6615L31.9515 70.7465C32.0327 66.9321 32.7218 64.0399 33.8792 61.9422L30.3768 60.0098ZM27.9526 70.6564C27.8669 74.2551 27.824 77.727 27.824 81.072H31.824C31.824 77.761 31.8665 74.3209 31.9514 70.7516L27.9526 70.6564ZM27.824 81.072C27.824 84.4169 27.8669 87.9735 27.9525 91.7414L31.9515 91.6506C31.8665 87.9092 31.824 84.3831 31.824 81.072H27.824ZM27.9528 91.7531C28.1307 97.9807 29.6938 102.943 33.0397 106.188L35.8243 103.316C33.5382 101.099 32.1146 97.3579 31.9512 91.6389L27.9528 91.7531ZM33.0613 106.208C36.377 109.329 40.556 110.848 45.44 110.848V106.848C41.4493 106.848 38.2897 105.636 35.8027 103.296L33.0613 106.208ZM101.41 125.232L99.8915 126.534L99.9916 126.65L100.108 126.751L101.41 125.232ZM100.77 122.16L98.8919 121.473L98.8554 121.572L98.8297 121.675L100.77 122.16ZM130.85 39.984L132.728 40.6715L132.757 40.5919L132.78 40.5102L130.85 39.984ZM132.386 37.552L133.715 39.0468L133.724 39.0386L132.386 37.552ZM158.114 37.552L156.7 38.9662L156.778 39.0445L156.865 39.1137L158.114 37.552ZM159.778 39.984L157.848 40.5102L157.87 40.5906L157.899 40.6689L159.778 39.984ZM189.73 122.16L187.851 122.845L187.89 122.952L187.941 123.054L189.73 122.16ZM189.09 125.232L190.504 126.646L190.504 126.646L189.09 125.232ZM168.482 125.104L166.977 126.421L167.065 126.521L167.165 126.609L168.482 125.104ZM167.33 123.312L169.227 122.68L169.214 122.638L169.198 122.598L167.33 123.312ZM162.338 110.256L164.206 109.542L163.715 108.256H162.338V110.256ZM128.162 110.256V108.256H126.773L126.288 109.558L128.162 110.256ZM123.298 123.312L121.424 122.614L121.412 122.646L121.401 122.68L123.298 123.312ZM122.146 125.104L123.56 126.518L123.607 126.471L123.651 126.421L122.146 125.104ZM133.41 91.824L131.521 91.1658L130.595 93.824H133.41V91.824ZM157.218 91.824V93.824H160.053L159.102 91.1531L157.218 91.824ZM145.186 58.032L147.07 57.3611L145.166 52.0126L143.297 57.3738L145.186 58.032ZM103.33 124C103.197 124 103.005 123.965 102.712 123.713L100.108 126.751C101.01 127.523 102.098 128 103.33 128V124ZM102.929 123.93C102.677 123.637 102.642 123.445 102.642 123.312H98.642C98.642 124.544 99.119 125.632 99.8915 126.534L102.929 123.93ZM102.642 123.312C102.642 123.016 102.672 122.798 102.71 122.645L98.8297 121.675C98.6974 122.204 98.642 122.755 98.642 123.312H102.642ZM102.648 122.847L132.728 40.6715L128.972 39.2965L98.8919 121.473L102.648 122.847ZM132.78 40.5102C132.928 39.9673 133.22 39.4869 133.715 39.0468L131.057 36.0572C130.016 36.9824 129.284 38.1233 128.92 39.4578L132.78 40.5102ZM133.724 39.0386C134.121 38.6814 134.75 38.4 135.842 38.4V34.4C134.032 34.4 132.358 34.8865 131.048 36.0654L133.724 39.0386ZM135.842 38.4H154.786V34.4H135.842V38.4ZM154.786 38.4C155.89 38.4 156.419 38.6858 156.7 38.9662L159.528 36.1378C158.273 34.8821 156.583 34.4 154.786 34.4V38.4ZM156.865 39.1137C157.43 39.566 157.717 40.0297 157.848 40.5102L161.708 39.4578C161.327 38.061 160.505 36.9033 159.363 35.9903L156.865 39.1137ZM157.899 40.6689L187.851 122.845L191.609 121.475L161.657 39.2991L157.899 40.6689ZM187.941 123.054C187.957 123.087 187.986 123.159 187.986 123.312H191.986C191.986 122.612 191.844 121.916 191.519 121.266L187.941 123.054ZM187.986 123.312C187.986 123.344 187.992 123.501 187.676 123.818L190.504 126.646C191.382 125.768 191.986 124.645 191.986 123.312H187.986ZM187.676 123.818C187.563 123.93 187.443 124 187.17 124V128C188.433 128 189.593 127.558 190.504 126.646L187.676 123.818ZM187.17 124H171.426V128H187.17V124ZM171.426 124C170.433 124 169.992 123.767 169.799 123.599L167.165 126.609C168.338 127.635 169.859 128 171.426 128V124ZM169.987 123.787C169.462 123.186 169.276 122.825 169.227 122.68L165.433 123.944C165.726 124.823 166.308 125.656 166.977 126.421L169.987 123.787ZM169.198 122.598L164.206 109.542L160.47 110.97L165.462 124.026L169.198 122.598ZM162.338 108.256H128.162V112.256H162.338V108.256ZM126.288 109.558L121.424 122.614L125.172 124.01L130.036 110.954L126.288 109.558ZM121.401 122.68C121.352 122.825 121.166 123.186 120.641 123.787L123.651 126.421C124.32 125.656 124.902 124.823 125.195 123.944L121.401 122.68ZM120.732 123.69C120.702 123.719 120.349 124 119.074 124V128C120.7 128 122.395 127.683 123.56 126.518L120.732 123.69ZM119.074 124H103.33V128H119.074V124ZM133.41 93.824H157.218V89.824H133.41V93.824ZM159.102 91.1531L147.07 57.3611L143.302 58.7029L155.334 92.4949L159.102 91.1531ZM143.297 57.3738L131.521 91.1658L135.299 92.4821L147.075 58.6901L143.297 57.3738ZM220.902 56.496H222.902V54.496H220.902V56.496ZM195.814 55.6L194.309 56.917L194.353 56.9671L194.4 57.0142L195.814 55.6ZM195.814 37.296L197.228 38.7102L197.228 38.7102L195.814 37.296ZM269.286 55.6L270.7 57.0142L270.747 56.9671L270.791 56.917L269.286 55.6ZM244.198 56.496V54.496H242.198V56.496H244.198ZM224.102 124C223.629 124 223.391 123.869 223.212 123.69L220.384 126.518C221.4 127.534 222.697 128 224.102 128V124ZM223.212 123.69C223.033 123.511 222.902 123.273 222.902 122.8H218.902C218.902 124.205 219.368 125.502 220.384 126.518L223.212 123.69ZM222.902 122.8V56.496H218.902V122.8H222.902ZM220.902 54.496H198.118V58.496H220.902V54.496ZM198.118 54.496C197.645 54.496 197.407 54.3647 197.228 54.1858L194.4 57.0142C195.416 58.03 196.713 58.496 198.118 58.496V54.496ZM197.319 54.283C197.019 53.9399 196.918 53.6327 196.918 53.296H192.918C192.918 54.666 193.414 55.8947 194.309 56.917L197.319 54.283ZM196.918 53.296V39.6H192.918V53.296H196.918ZM196.918 39.6C196.918 39.1272 197.049 38.8891 197.228 38.7102L194.4 35.8818C193.384 36.8975 192.918 38.1955 192.918 39.6H196.918ZM197.228 38.7102C197.407 38.5313 197.645 38.4 198.118 38.4V34.4C196.713 34.4 195.416 34.866 194.4 35.8818L197.228 38.7102ZM198.118 38.4H266.982V34.4H198.118V38.4ZM266.982 38.4C267.455 38.4 267.693 38.5313 267.872 38.7102L270.7 35.8818C269.684 34.866 268.387 34.4 266.982 34.4V38.4ZM267.872 38.7102C268.051 38.8891 268.182 39.1272 268.182 39.6H272.182C272.182 38.1955 271.716 36.8975 270.7 35.8818L267.872 38.7102ZM268.182 39.6V53.296H272.182V39.6H268.182ZM268.182 53.296C268.182 53.6327 268.081 53.9399 267.781 54.283L270.791 56.917C271.686 55.8947 272.182 54.666 272.182 53.296H268.182ZM267.872 54.1858C267.693 54.3647 267.455 54.496 266.982 54.496V58.496C268.387 58.496 269.684 58.03 270.7 57.0142L267.872 54.1858ZM266.982 54.496H244.198V58.496H266.982V54.496ZM242.198 56.496V122.8H246.198V56.496H242.198ZM242.198 122.8C242.198 123.273 242.067 123.511 241.888 123.69L244.716 126.518C245.732 125.502 246.198 124.205 246.198 122.8H242.198ZM241.888 123.69C241.709 123.869 241.471 124 240.998 124V128C242.402 128 243.7 127.534 244.716 126.518L241.888 123.69ZM240.998 124H224.102V128H240.998V124Z"
        fill="bg"
      />
    </svg>
  </MotionStack>
)
