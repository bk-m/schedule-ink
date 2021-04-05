class SerializeService {
  dumps(input: Object): string {
    return btoa(JSON.stringify(input));
  }

  loads(input: string): Object {
    return JSON.parse(atob(input));
  }
}

export const serializeService = new SerializeService();
