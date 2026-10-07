import { chapters } from "../data/content";

/** Ordered section ids shared by chapter rail + primary nav. */
export const TRACKED_SECTION_IDS = chapters.map((chapter) => chapter.id);
