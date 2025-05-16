import { useState } from 'react';
import CafeInfo from "../CafeInfo/CafeInfo";
import VoteOptions from "../VoteOptions/VoteOptions";
import css from "./App.module.css";
import { type Votes, type VoteType } from "../../types/votes";
import VoteStats from '../VoteStats/VoteStats';
import Notification from '../Notification/Notification';

export default function App() {
  const [votes, setVotes] = useState<Votes>({
    good: 0,
    neutral: 0,
    bad: 0
  });
  const handleVote = (type: VoteType) => {
    setVotes({
      ...votes,
      [type]: votes[type] + 1,
    });
  };
  const resetVotes = () => {
    setVotes({
      good: 0,
      neutral: 0,
      bad: 0
    });
  }
  const sumVotes = votes.good + votes.neutral + votes.bad;
  const procentVotes = sumVotes
    ? Math.round((votes.good / sumVotes) * 100)
    : 0
  return (
    <>
      <div className={css.app}>
        <CafeInfo />
        <VoteOptions onVote={handleVote} onReset={() => resetVotes()} canReset={sumVotes > 0 && true} />
        {sumVotes > 0 ?
          <VoteStats votes={{ good: votes.good, neutral: votes.neutral, bad: votes.bad }} totalVotes={sumVotes} positiveRate={procentVotes} />
          : < Notification />}
      </div>
    </>
  )
}
