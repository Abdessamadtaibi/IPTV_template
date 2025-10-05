import { Plan } from './supabase';

export const formatDuration = (durationDays: number): string => {
  if (durationDays >= 365) {
    const years = Math.floor(durationDays / 365);
    return years === 1 ? '1 year' : `${years} years`;
  }
  
  if (durationDays >= 30) {
    const months = Math.floor(durationDays / 30);
    return months === 1 ? '1 month' : `${months} months`;
  }
  
  return `${durationDays} days`;
};

export const planToSummary = (plan: Plan) => ({
  ...plan,
  duration: formatDuration(plan.duration_days)
});
