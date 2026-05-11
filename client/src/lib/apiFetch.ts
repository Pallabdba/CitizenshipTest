import { api } from "./clientStorage";

function json(data: unknown, status = 200): Response {
  return new Response(JSON.stringify(data), {
    status, headers: { "Content-Type": "application/json" },
  });
}

function err(msg: string, status = 500): Response {
  return new Response(JSON.stringify({ message: msg }), {
    status, headers: { "Content-Type": "application/json" },
  });
}

async function body(init?: RequestInit): Promise<any> {
  if (!init?.body) return undefined;
  return typeof init.body === 'string' ? JSON.parse(init.body) : undefined;
}

export async function handleApiRequest(url: string, init?: RequestInit): Promise<Response> {
  const method = (init?.method ?? 'GET').toUpperCase();
  const apiStart = url.indexOf('/api/');
  const full = apiStart >= 0 ? url.slice(apiStart) : url;
  const [pathRaw, queryRaw] = full.split('?');
  const params = new URLSearchParams(queryRaw ?? '');
  const parts = pathRaw.replace(/^\/api\//, '').replace(/\/$/, '').split('/');

  try {
    const [r0, r1, r2] = parts;

    if (r0 === 'categories') {
      if (!r1 && method === 'GET') return json(api.getCategories());
      if (r1 && r2 === 'question-count' && method === 'GET') {
        const id = parseInt(r1);
        return json({ categoryId: id, count: api.getCategoryQuestionCount(id) });
      }
      if (r1 && !r2 && method === 'GET') {
        const cat = api.getCategory(parseInt(r1));
        return cat ? json(cat) : err('Not found', 404);
      }
    }

    if (r0 === 'questions') {
      if (r1 === 'random') return json(api.getRandomQuestions(
        params.get('categoryId') ? parseInt(params.get('categoryId')!) : undefined,
        params.get('limit') ? parseInt(params.get('limit')!) : 20,
      ));
      if (!r1) return json(api.getQuestions(
        params.get('categoryId') ? parseInt(params.get('categoryId')!) : undefined,
      ));
      const q = api.getQuestion(parseInt(r1));
      return q ? json(q) : err('Not found', 404);
    }

    if (r0 === 'test-sets') {
      if (!r1) return json(api.getTestSets());
      const s = api.getTestSet(parseInt(r1));
      return s ? json(s) : err('Not found', 404);
    }

    if (r0 === 'flashcard-sets') {
      if (!r1) return json(api.getFlashcardSets());
      const s = api.getFlashcardSet(parseInt(r1));
      return s ? json(s) : err('Not found', 404);
    }

    if (r0 === 'flashcards') {
      if (!r1) return json(api.getFlashcards(
        params.get('categoryId') ? parseInt(params.get('categoryId')!) : undefined,
      ));
      const f = api.getFlashcards().find(x => x.id === parseInt(r1));
      return f ? json(f) : err('Not found', 404);
    }

    if (r0 === 'test-sessions') {
      if (!r1 && method === 'POST') return json(api.createTestSession(await body(init)), 201);
      if (r1 && r2 === 'complete' && method === 'POST') return json(api.completeTestSession(parseInt(r1)));
      if (r1 && r2 === 'results') return json(api.getSessionResults(parseInt(r1)));
      if (r1 && method === 'PUT') return json(api.updateTestSession(parseInt(r1), await body(init)));
      if (r1) { const s = api.getTestSession(parseInt(r1)); return s ? json(s) : err('Not found', 404); }
      const uid = params.get('userId') || 'demo-user-123';
      return json(api.getTestSessions(uid));
    }

    if (r0 === 'test-answers') {
      if (method === 'POST') return json(api.createTestAnswer(await body(init)), 201);
      const sid = params.get('sessionId');
      return json(sid ? api.getTestAnswers(parseInt(sid)) : []);
    }

    if (r0 === 'user-progress' || r0 === 'progress') {
      return json(api.getUserProgress(params.get('userId') || 'demo-user-123'));
    }

    if (r0 === 'dashboard') {
      const uid = params.get('userId') || 'demo-user-123';
      if (r1 === 'stats') return json(api.getDashboardStats(uid));
      if (r1 === 'activity') return json(api.getStudyActivity(uid));
      if (r1 === 'results') return json(api.getTestResults(uid));
    }

    return err(`Unknown endpoint: ${full}`, 404);
  } catch (e) {
    return err(e instanceof Error ? e.message : 'Internal error', 500);
  }
}
