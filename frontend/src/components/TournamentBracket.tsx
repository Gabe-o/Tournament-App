import React from 'react';
import './bracket.css';

interface Match {
  team1: string | null;
  team2: string | null;
}

type Round = Match[];

function generateBracket(teams: string[]): Round[] {
  const totalTeams = teams.length;
  // Calculate the next power of 2. This determines how many slots we need.
  const nextPowerOf2 = Math.pow(2, Math.ceil(Math.log2(totalTeams)));
  const byes = nextPowerOf2 - totalTeams;

  // Pad teams with null to represent byes
  const paddedTeams = [...teams, ...new Array(byes).fill(null)];

  // Split the padded teams in half so that all team1 slots are filled first.
  // The first half goes to team1 and (if available) the second half provides team2s.
  const half = paddedTeams.length / 2;
  const firstRound: Match[] = [];
  for (let i = 0; i < half; i++) {
    firstRound.push({
      team1: paddedTeams[i],
      team2: paddedTeams[i + half]
    });
  }

  // Build the rounds array starting with the first round.
  const rounds: Round[] = [firstRound];
  let currentRound = firstRound;

  // Generate subsequent rounds as empty placeholder matches.
  while (currentRound.length > 1) {
    const nextRound: Match[] = [];
    for (let i = 0; i < currentRound.length; i += 2) {
      nextRound.push({ team1: null, team2: null });
    }
    rounds.push(nextRound);
    currentRound = nextRound;
  }

  return rounds;
}

interface TournamentBracketProps {
  teams: string[];
}

const TournamentBracket: React.FC<TournamentBracketProps> = ({ teams }) => {
  const rounds = generateBracket(teams);

  return (
    <div className="bracket-viewport">
      <div className="bracket-container">
        <div className="bracket">
          {rounds.map((round, roundIndex) => (
            <div key={roundIndex} className={`column round-${roundIndex + 1}`}>
              {round.map((match, matchIndex) => (
                <div key={matchIndex} className="match">
                  <div className="match-top team">
                    <span className="name">{match.team1 ?? 'TBD'}</span>
                  </div>
                  <div className="match-bottom team">
                    <span className="name">{match.team2 ?? 'TBD'}</span>
                  </div>
                  <div className="match-lines">
                    <div className="line one"></div>
                    <div className="line two" style={{ height: `${43 * Math.pow(2, roundIndex)}px` }}></div>
                  </div>
                  <div className="match-lines alt">
                    <div className="line one"></div>
                  </div>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TournamentBracket; 