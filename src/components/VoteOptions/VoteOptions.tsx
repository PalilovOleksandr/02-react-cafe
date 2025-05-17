import type { VoteType } from "../../types/votes";
import css from "./VoteOptions.module.css";

interface VoteOptionsProps {
    onVote: (type: VoteType) => void;
    onReset: () => void;
    canReset: boolean;
}

export default function VoteOptions({ onVote, onReset, canReset }: VoteOptionsProps) {
    return (
        <div className={css.container}>
            <button type="button" className={css.button} onClick={() => onVote("good")} aria-label="good">Good</button>
            <button type="button" className={css.button} onClick={() => onVote("neutral")} aria-label="neutral">Neutral</button>
            <button type="button" className={css.button} onClick={() => onVote("bad")} aria-label="bad">Bad</button>
            {canReset && (<button className={`${css.button} ${css.reset}`} onClick={onReset} aria-label="reset">Reset</button>)}
        </div>
    )
}