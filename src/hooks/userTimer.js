import { useContext } from "react";
import { TimerTestContext } from "../contexts/TimerTestContext";

export function useTimer() {
    const value = useContext(TimerTestContext);

    return value;
}