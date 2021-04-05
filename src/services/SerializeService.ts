class SerializeService {
  dumps(input: Record<string, unknown>): string {
    return btoa(JSON.stringify(input));
  }

  loads(input: string): Record<string, unknown> {
    return JSON.parse(atob(input));
  }
}

export const serializeService = new SerializeService();
