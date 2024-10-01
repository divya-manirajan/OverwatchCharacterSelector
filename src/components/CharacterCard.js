import DamageChars from "./DamageChars";
import SupportChars from "./SupportChars";
import TankChars from "./TankChars";

export default function CharacterCard({selectedChars, setSelectedChars}) {
      return (
        <div >
          <DamageChars selectedChars={selectedChars} setSelectedChars={setSelectedChars} />
          <TankChars selectedChars={selectedChars} setSelectedChars={setSelectedChars} />
          <SupportChars selectedChars={selectedChars} setSelectedChars={setSelectedChars} />
        </div>
      );
  }
