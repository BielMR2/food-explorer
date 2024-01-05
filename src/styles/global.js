import { createGlobalStyle } from "styled-components"

export default createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    :root {
        font-size: 16px;
    }

    body {
        background-color: ${({ theme }) => theme.COLORS.DARK_400};
        color: ${({ theme }) => theme.COLORS.LIGHT_300};

        -webkit-font-smoothing: antialiased;
    }

    body, input, button, textarea {
        font-family: 'Roboto', serif;
        font-size: 1rem;
        outline: none;
    }

    a {
        text-decoration: none
    }

    button, a {
        cursor: pointer;
        transition: filter .2s
    }

    button:hover, a:hover {
        filter: brightness(.9)
    }

    .poppins_100_medium {
        font-family: "Poppins";
        font-weight: medium;
        font-size: 0.875rem;
        line-height: 1.5rem;
        text-decoration: none;
    }

    .poppins_200_medium {
        font-family: "Poppins";
        font-weight: medium;
        font-size: 1.25rem;
        line-height: 1.5rem;
        text-decoration: none;
    }

    .poppins_300_bold {
        font-family: "Poppins";
        font-weight: bold;
        font-size: 1.5rem;
        line-height: 140%;
        text-decoration: none;
    }

    .poppins_300_regular {
        font-family: "Poppins";
        font-weight: normal;
        font-size: 0.87rem;
        line-height: 1.5rem;
        text-decoration: none;
    }

    .poppins_400_medium {
        font-family: "Poppins";
        font-weight: medium;
        font-size: 2rem;
        line-height: 140%;
        text-decoration: none;
    }

    .poppins_500_medium {
        font-family: "Poppins";
        font-weight: medium;
        font-size: 2.5rem;
        line-height: 140%;
        text-decoration: none;
    }


    .roboto_smallest_regular {
        font-family: "Roboto";
        font-weight: normal;
        font-size: 0.75rem;
        line-height: 160%;
        text-decoration: none;
    }

    .roboto_smaller_regular {
        font-family: "Roboto";
        font-weight: normal;
        font-size: 0.87rem;
        line-height: 160%;
        text-decoration: none;
    }

    .roboto_smaller_bold {
        font-family: "Roboto";
        font-weight: bold;
        font-size: 0.87rem;
        line-height: 160%;
        text-decoration: none;
    }

    .roboto_small_spaced {
        font-family: "Roboto";
        font-weight: medium;
        font-size: 1rem;
        line-height: 160%;
        text-decoration: none;
    }

    .roboto_small_regular {
        font-family: "Roboto";
        font-weight: normal;
        font-size: 1rem;
        line-height: 100%;
        text-decoration: none;
    }

    .roboto_big_bold {
        font-family: "Roboto";
        font-weight: bold;
        font-size: 1.25rem;
        line-height: 160%;
        text-decoration: none;
    }
    
    .roboto_bigger_bold {
        font-family: "Roboto";
        font-weight: bold;
        font-size: 1.5rem;
        line-height: auto;
        text-decoration: none;
    }

    .roboto_biggest_regular {
        font-family: "Roboto";
        font-weight: normal;
        font-size: 2rem;
        line-height: 160%;
        text-decoration: none;
    }

    .roboto_giant_bold {
        font-family: "Roboto";
        font-weight: bold;
        font-size: 2.62rem;
        line-height: auto;
        text-decoration: none;
    }   
`