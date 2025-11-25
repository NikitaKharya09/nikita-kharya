import { questionPatterns } from '../data/researchQuestions';
import { responses } from '../data/researchResponses';

/**
 * Match user query to response template
 */
export const matchQuery = (query, context = 'research') => {
  const q = query.toLowerCase().trim();
  
  // Try to find matching pattern
  for (const [key, config] of Object.entries(questionPatterns)) {
    for (const pattern of config.patterns) {
      if (pattern.test(q)) {
        return {
          responseKey: config.responseKey,
          category: config.category,
          matched: true
        };
      }
    }
  }
  
  // No match found
  return {
    responseKey: 'default',
    category: 'general',
    matched: false
  };
};

/**
 * Get response based on detail level
 */
export const getResponse = (responseKey, detailLevel = 'medium') => {
  const response = responses[responseKey];
  
  if (!response) {
    return responses.default[detailLevel];
  }
  
  return response[detailLevel] || response.medium;
};

/**
 * Determine detail level based on query
 */
export const getDetailLevel = (query) => {
  const q = query.toLowerCase();
  
  // Quick responses
  if (q.includes('tldr') || q.includes('quick') || q.includes('brief')) {
    return 'quick';
  }
  
  // Detailed responses
  if (q.includes('explain') || q.includes('detail') || q.includes('how exactly')) {
    return 'detailed';
  }
  
  // Default to medium
  return 'medium';
};

/**
 * Main function to process query
 */
export const processResearchQuery = (query) => {
  const match = matchQuery(query);
  const detailLevel = getDetailLevel(query);
  const response = getResponse(match.responseKey, detailLevel);
  
  return {
    response,
    category: match.category,
    matched: match.matched,
    detailLevel
  };
};
