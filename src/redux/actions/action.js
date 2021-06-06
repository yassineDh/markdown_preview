import { DISPLAY_ON_PREVIEW } from "../types/types";

export const displayOnPreview = (data) => {
  return {
    type: DISPLAY_ON_PREVIEW,
    payload: data,
  };
};
