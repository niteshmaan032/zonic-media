import { tampaUi } from "./flTampaUi";
import { orlandoUi } from "./flOrlandoUi";
import { miamiUi } from "./flMiamiUi";
import { jacksonvilleUi } from "./flJacksonvilleUi";
import { fortLauderdaleUi } from "./flFortLauderdaleUi";
import { sarasotaUi } from "./flSarasotaUi";
import { stPetersburgUi } from "./flStPetersburgUi";
import { fortMyersUi } from "./flFortMyersUi";
import type { DelawareKind, FlCityKind, FlCityUi } from "./types";

/* Florida city digital marketing pages (18 Nov 2026): each city's UI set,
   picked by page kind. The template asks here instead of carrying a branch
   per city. */
const FL_CITY_UI: Record<FlCityKind, FlCityUi> = {
  "fl-tampa": tampaUi,
  "fl-orlando": orlandoUi,
  "fl-miami": miamiUi,
  "fl-jacksonville": jacksonvilleUi,
  "fl-fort-lauderdale": fortLauderdaleUi,
  "fl-sarasota": sarasotaUi,
  "fl-st-petersburg": stPetersburgUi,
  "fl-fort-myers": fortMyersUi,
};

export function cityUi(kind: DelawareKind): FlCityUi | null {
  return kind in FL_CITY_UI ? FL_CITY_UI[kind as FlCityKind] : null;
}
