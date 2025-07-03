import { aNewHope } from "./transcripts/a-new-hope";
import { empireStrikesBack } from "./transcripts/empire-strikes-back";
import { returnOfTheJedi } from "./transcripts/return-of-the-jedi";

const transcripts: { [key: string]: string } = {
  ["a-new-hope"]: aNewHope,
  ["empire-strikes-back"]: empireStrikesBack,
  ["return-of-the-jedi"]: returnOfTheJedi
};

export default function useTranscript(movie: string) {
  if (!(movie in transcripts)) return ["Error"];
  const transcriptString = transcripts[movie];
  return transcriptString.split("\n\n")
}
