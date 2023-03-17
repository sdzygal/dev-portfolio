import ReactGA from "react-ga4";

export const AnalyticEvent = (category, action) => {
    ReactGA.event({
        category: category,
        action: action
    });
};