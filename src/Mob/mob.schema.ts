import { z } from "zod";

export const createMobSchema = z.object({
  body: z.object({
    name: z.string({
      required_error: "Name is required",
    }),
    hp: z.number({
      required_error: "Content is required",
    }),
    attack: z.number({
      required_error: "Content is required",
    }),
    skillIds: z.number().array()
  }),
});

export const params = z.object({
  mobId: z.string(),
});

export const updateMobSchema = z.object({
  params,
  body: z
    .object({
      name: z.string(),
      hp: z.number(),
      attack: z.number(),
      monster: z.boolean(),
    })
    .partial(),
});

export const filterQuery = z.object({
  limit: z.number().default(1),
  page: z.number().default(10),
});

export type ParamsMobInput = z.TypeOf<typeof params>;
export type FilterMobQueryInput = z.TypeOf<typeof filterQuery>;
export type CreateMobInput = z.TypeOf<typeof createMobSchema>["body"];
export type UpdateMobInput = z.TypeOf<typeof updateMobSchema>;
