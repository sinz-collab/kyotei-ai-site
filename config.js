window.KYOTEI_DATA_BASES =
  window.KYOTEI_DATA_BASES ||
  (location.protocol === "file:" || ["localhost", "127.0.0.1", "::1"].includes(location.hostname)
    ? ["../../kyotei-ai-data/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/70d11c287bef089f8067a0fd3ed2965de87f6ae9/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/main/data"]
    : ["https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/70d11c287bef089f8067a0fd3ed2965de87f6ae9/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/main/data"]);
