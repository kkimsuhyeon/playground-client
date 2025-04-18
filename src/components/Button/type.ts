export const ButtonVariant = ['default', 'destructive', 'outline', 'secondary', 'ghost', 'link'] as const;

export const ButtonSize = ['default', 'sm', 'lg', 'icon'] as const;

export type ButtonVariantType = (typeof ButtonVariant)[number];
export type ButtonSizeType = (typeof ButtonSize)[number];

export type ButtonVariants = {
  variant: { [K in ButtonVariantType]: string };
  size: { [K in ButtonSizeType]: string };
};
