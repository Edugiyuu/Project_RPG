import { z } from "zod";

export const createPlayerSchema = z.object({
  body: z.object({
    name: z.string({
      required_error: "Name is required",
    }),
    hp: z.number({
      required_error: "Hp is required",
    }),
    attack: z.number({
      required_error: "Attack is required",
    }),
    stamina: z.number({
      required_error: "Stamina is required",
    }),
    level: z.number({
      required_error: "Level is required",
    }),
    skillIds: z.number().array()
  }),
});

export const params = z.object({
  playerId: z.string(),
});

export const updatePlayerSchema = z.object({
  params,
  body: z
    .object({
      name: z.string(),
      hp: z.number(),
      attack: z.number(),
      stamina: z.number(),
      level: z.number(),
    })
  
});

export const filterQuery = z.object({
  limit: z.number().default(1),
  page: z.number().default(10),
});

export type ParamsPlayerInput = z.TypeOf<typeof params>;
export type FilterPlayerQueryInput = z.TypeOf<typeof filterQuery>;
export type CreatePlayerInput = z.TypeOf<typeof createPlayerSchema>["body"];
export type UpdatePlayerInput = z.TypeOf<typeof updatePlayerSchema>;
