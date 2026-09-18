import type { StateContent } from "../stateContent";

/* September 2026 expansion: one file per state, merged into STATE_CONTENT. */
import alabama from "./alabama";
import arizona from "./arizona";
import arkansas from "./arkansas";
import colorado from "./colorado";
import illinois from "./illinois";
import indiana from "./indiana";
import kentucky from "./kentucky";
import louisiana from "./louisiana";
import maryland from "./maryland";
import massachusetts from "./massachusetts";
import michigan from "./michigan";
import minnesota from "./minnesota";
import missouri from "./missouri";
import nevada from "./nevada";
import newJersey from "./new-jersey";
import newYork from "./new-york";
import ohio from "./ohio";
import oklahoma from "./oklahoma";
import oregon from "./oregon";
import pennsylvania from "./pennsylvania";
import southCarolina from "./south-carolina";
import tennessee from "./tennessee";
import utah from "./utah";
import virginia from "./virginia";
import washington from "./washington";
import wisconsin from "./wisconsin";

export const EXPANSION_STATES: Record<string, StateContent> = {
  alabama: alabama,
  arizona: arizona,
  arkansas: arkansas,
  colorado: colorado,
  illinois: illinois,
  indiana: indiana,
  kentucky: kentucky,
  louisiana: louisiana,
  maryland: maryland,
  massachusetts: massachusetts,
  michigan: michigan,
  minnesota: minnesota,
  missouri: missouri,
  nevada: nevada,
  "new-jersey": newJersey,
  "new-york": newYork,
  ohio: ohio,
  oklahoma: oklahoma,
  oregon: oregon,
  pennsylvania: pennsylvania,
  "south-carolina": southCarolina,
  tennessee: tennessee,
  utah: utah,
  virginia: virginia,
  washington: washington,
  wisconsin: wisconsin,
};
