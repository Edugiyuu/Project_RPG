import { z } from "zod";

export const createTraitSchema = z.object({
  body: z.object({
    name: z.string({
      required_error: "Name is required",
    }),
    description: z.string(),

    type: z.string({
      required_error: "type is required",
    }),
    damageBonus: z.number(),

    hpBonus: z.number(),

    dodge: z.boolean(),

    staminaBonus: z.number(),

    revive: z.boolean(),
  }),
});

export const params = z.object({
  traitId: z.string(),
});

export const updateTraitSchema = z.object({
  params,
  body: z
    .object({
      name: z.string({
        required_error: "Name is required",
      }),
      description: z.string(),
  
      type: z.string({
        required_error: "type is required",
      }),
      damageBonus: z.number(),
  
      hpBonus: z.number(),
  
      dodge: z.boolean(),
  
      staminaBonus: z.number(),
  
      revive: z.boolean(),
    })
    
});

export const filterQuery = z.object({
  limit: z.number().default(1),
  page: z.number().default(10),
});

export type ParamsTraitInput = z.TypeOf<typeof params>;
export type FilterTraitQueryInput = z.TypeOf<typeof filterQuery>;
export type CreateTraitInput = z.TypeOf<typeof createTraitSchema>["body"];
export type UpdateTraitInput = z.TypeOf<typeof updateTraitSchema>;