import { z } from "zod";

export const createPlayerSkillSchema = z.object({
  body: z.object({
    playerId: z.string({
      required_error: "playerId is required"
    }),
    skillId: z.string({
      required_error: "skillId is required"
    }),
  }),
});

export const params = z.object({
  playerSkillId: z.string(),
});

export const updatePlayerSkillSchema = z.object({
  params,
  body: z
    .object({
      playerId: z.string(),
      skillId: z.string()
    })
    
});

export const filterQuery = z.object({
  limit: z.number().default(1),
  page: z.number().default(10),
});

export type ParamsSkillInput = z.TypeOf<typeof params>;
export type FilterSkillQueryInput = z.TypeOf<typeof filterQuery>;
export type CreateSkillInput = z.TypeOf<typeof createPlayerSkillSchema>["body"];
export type UpdateSkillInput = z.TypeOf<typeof updatePlayerSkillSchema>;