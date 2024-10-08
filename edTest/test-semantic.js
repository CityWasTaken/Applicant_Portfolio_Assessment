// check for semantic elements
// check for header
edTest('Should have a header element', () => {
  const header = document.querySelector('header');
  if (header) {
    return {
      ok: true,
      passed: true,
      score: 10,
      feedback: 'Great job, you have a header element!',
    };
  }
  return {
    ok: true,
    passed: false,
    feedback: 'No header element found!',
  };
});

// check for title
edTest('Should have a title element', () => {
  const title = document.querySelector('head > title');
  if (title) {
    return {
      ok: true,
      passed: true,
      score: 10,
      feedback: 'Great job, you have a title element!',
    };
  }
  return {
    ok: true,
    passed: false,
    feedback: 'No title element found!',
  };
});

// check for meta element for viewport
edTest('Should have a meta element for viewport', () => {
  const viewport = document.querySelector('meta[name="viewport"]');
  if (viewport) {
    return {
      ok: true,
      passed: true,
      score: 10,
      feedback: 'Great job, you have a meta element for viewport!',
    };
  }
  return {
    ok: true,
    passed: false,
    feedback: 'No meta element for viewport found!',
  };
});
// check for linked stylesheet
edTest('Should have a main linked stylesheet', () => {
  const styles = document.querySelector('link[rel="stylesheet"]');
  if (styles) {
    return {
      ok: true,
      passed: true,
      score: 10,
      feedback: 'Great job, you have a linked stylesheet!',
    };
  }
  return {
    ok: true,
    passed: false,
    feedback: 'No linked stylesheet found!',
  };
});

// check for nav
edTest('Should have a nav element', () => {
  const nav = document.querySelector('nav');
  if (nav) {
    return {
      ok: true,
      passed: true,
      score: 10,
      feedback: 'Great job, you have a nav element!',
    };
  }
  return {
    ok: true,
    passed: false,
    feedback: 'No nav element found!',
  };
});

// check for main
edTest('Should have a main element', () => {
  const main = document.querySelector('main');
  if (main) {
    return {
      ok: true,
      passed: true,
      score: 10,
      feedback: 'Great job, you have a main element!',
    };
  }
  return {
    ok: true,
    passed: false,
    feedback: 'No main element found!',
  };
});

// check for more than one section
edTest('Should have more than one section element', () => {
  const sections = document.querySelectorAll('section');
  if (sections.length > 1) {
    return {
      ok: true,
      passed: true,
      score: 10,
      feedback: 'Great job, you have more than one section element!',
    };
  }
  return {
    ok: true,
    passed: false,
    feedback: 'No section elements found!',
  };
});
