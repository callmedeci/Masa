export function selectColor(color) {
  const colorClasses = {
    green: 'bg-ctp-green/20',
    mauve: 'bg-ctp-mauve/20',
    peach: 'bg-ctp-peach/20',
    pink: 'bg-ctp-pink/20',
  };

  const borderClasses = {
    green: 'border-ctp-green',
    mauve: 'border-ctp-mauve',
    peach: 'border-ctp-peach',
    pink: 'border-ctp-pink',
  };

  const textClasses = {
    green: 'text-ctp-green',
    mauve: 'text-ctp-mauve',
    peach: 'text-ctp-peach',
    pink: 'text-ctp-pink',
  };

  const shadowClasses = {
    purple: 'shadow-purple-500',
    mauve: 'shadow-ctp-mauve',
    indigo: 'shadow-indigo-500',
    text: 'shadow-ctp-text',
    red: 'shadow-ctp-red',
    rose: 'shadow-rose-500',
    zinc: 'shadow-zinc-400',
    teal: 'shadow-ctp-teal',
    pink: 'shadow-pink-400',
    ctpPink: 'shadow-ctp-pink',
    sky400: 'shadow-sky-400',
    sky: 'shadow-sky-500',
    blue500: 'shadow-blue-500',
    blue: 'shadow-blue-600',
    ctpBlue: 'shadow-ctp-blue',
    orange: 'shadow-orange-500',
    orange400: 'shadow-orange-400',
  };

  const bgColor = colorClasses[color] || 'bg-ctp-rose/20';
  const borderColor = borderClasses[color] || 'border-ctp-rose';
  const textColor = textClasses[color] || 'text-ctp-rose';
  const shadowColor = shadowClasses[color] || 'shadow-ctp-rose';

  return {
    bgColor,
    textColor,
    borderColor,
    shadowColor,
  };
}
