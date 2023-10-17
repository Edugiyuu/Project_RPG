import { z } from "zod";

export const createSkillSchema = z.object({
  body: z.object({
    name: z.string({
      required_error: "Name is required",
    }),
    damage: z.number({
      required_error: "damage is required",
    }),
    heal: z.number({
      required_error: "Attack is required",
    }),
    stun: z.boolean({
      required_error: "stun is required",
    }),
    stamina: z.number({
      required_error: "stamina is required",
    }),
    mobSkill: z.boolean({
      required_error: "",
    }),
  }),
});

export const params = z.object({
  skillId: z.string(),
});

export const updateSkillSchema = z.object({
  params,
  body: z
    .object({
      name: z.string(),
      damage: z.number(),
      heal: z.number(),
      stun: z.boolean(),
      stamina: z.number(),
      mobSkill: z.boolean(),
    })
    .partial(),
});

export const filterQuery = z.object({
  limit: z.number().default(1),
  page: z.number().default(10),
});

export type ParamsSkillInput = z.TypeOf<typeof params>;
export type FilterSkillQueryInput = z.TypeOf<typeof filterQuery>;
export type CreateSkillInput = z.TypeOf<typeof createSkillSchema>["body"];
export type UpdateSkillInput = z.TypeOf<typeof updateSkillSchema>;