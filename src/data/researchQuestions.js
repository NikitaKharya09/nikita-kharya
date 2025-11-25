export const questionPatterns = {
  // Core Problem
  coreProblem: {
    patterns: [
      /what (problem|issue|challenge)/i,
      /why (difficult|hard|tough)/i,
      /what'?s wrong with/i,
      /wall of text/i,
      /verify.*reasoning/i,
      /detect.*error/i
    ],
    responseKey: 'coreProblem',
    category: 'problem'
  },

  // iGraph
  iGraph: {
    patterns: [
      /what is igraph/i,
      /igraph.*work/i,
      /graph.*visualization/i,
      /visual.*reasoning/i,
      /why igraph/i,
      /nodes.*edges/i
    ],
    responseKey: 'iGraph',
    category: 'interfaces'
  },

  // iCoT
  iCoT: {
    patterns: [
      /what is icot/i,
      /interactive.*chain.*thought/i,
      /icot.*work/i,
      /icot.*different/i
    ],
    responseKey: 'iCoT',
    category: 'interfaces'
  },

  // iPoT
  iPoT: {
    patterns: [
      /what is ipot/i,
      /program.*thought/i,
      /code.*based/i,
      /pseudo.*code/i
    ],
    responseKey: 'iPoT',
    category: 'interfaces'
  },

  // Results
  results: {
    patterns: [
      /results?/i,
      /findings?/i,
      /accuracy/i,
      /how (much|many) better/i,
      /statistics/i,
      /numbers/i
    ],
    responseKey: 'results',
    category: 'results'
  },

  // Why iGraph Best
  whyIGraphBest: {
    patterns: [
      /why igraph (best|better|win)/i,
      /igraph vs/i,
      /why.*visual.*better/i,
      /igraph.*dominate/i
    ],
    responseKey: 'whyIGraphBest',
    category: 'results'
  },

  // Applications
  applications: {
    patterns: [
      /(how|where).*use/i,
      /applications?/i,
      /real world/i,
      /practical/i,
      /domains?/i
    ],
    responseKey: 'applications',
    category: 'impact'
  },

  // Education
  education: {
    patterns: [
      /education/i,
      /students?/i,
      /learning/i,
      /teaching/i,
      /classroom/i
    ],
    responseKey: 'education',
    category: 'impact'
  },

  // Design Features
  designFeatures: {
    patterns: [
      /design features?/i,
      /how.*design/i,
      /dual.*panel/i,
      /color.*cod/i,
      /playback/i
    ],
    responseKey: 'designFeatures',
    category: 'design'
  },

  // Methodology
  methodology: {
    patterns: [
      /methodology/i,
      /how.*test/i,
      /study.*design/i,
      /participants?/i,
      /gsm8k/i
    ],
    responseKey: 'methodology',
    category: 'research'
  },

  // Implementation
  implementation: {
    patterns: [
      /how to (build|implement)/i,
      /tech.*stack/i,
      /architecture/i,
      /pipeline/i,
      /code/i
    ],
    responseKey: 'implementation',
    category: 'technical'
  },

  // Demo
  demo: {
    patterns: [
      /demo/i,
      /try.*it/i,
      /show me/i,
      /example/i,
      /test/i
    ],
    responseKey: 'demo',
    category: 'demo'
  },

  // Personal Story
  personalStory: {
    patterns: [
      /your (story|background|journey)/i,
      /first paper/i,
      /frontend.*research/i,
      /why.*you/i,
      /motivation/i
    ],
    responseKey: 'personalStory',
    category: 'personal'
  },

  // Future Work
  futureWork: {
    patterns: [
      /what'?s next/i,
      /future/i,
      /improvements?/i,
      /roadmap/i,
      /plans?/i
    ],
    responseKey: 'futureWork',
    category: 'future'
  },

  // Limitations
  limitations: {
    patterns: [
      /limitations?/i,
      /downsides?/i,
      /doesn'?t work/i,
      /challenges?/i,
      /trade.*offs?/i
    ],
    responseKey: 'limitations',
    category: 'critical'
  },

  // Format Comparison
  formatComparison: {
    patterns: [
      /compare/i,
      /vs\./i,
      /difference/i,
      /which.*better/i,
      /when.*use/i
    ],
    responseKey: 'formatComparison',
    category: 'comparison'
  },

  // ROI/Decision
  roi: {
    patterns: [
      /should I (use|implement)/i,
      /worth.*it/i,
      /roi/i,
      /cost/i,
      /benefit/i
    ],
    responseKey: 'roi',
    category: 'decision'
  }
};
