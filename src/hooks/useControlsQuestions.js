import { useContext } from "react";
import { ControlsQuestionsContext } from "../contexts/ControlsQuestionsContext";

export function useControlsQuestions() {
    const value = useContext(ControlsQuestionsContext);

    return value;
}

