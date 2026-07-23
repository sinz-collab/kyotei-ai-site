window.KYOTEI_DATA_BASES =
  window.KYOTEI_DATA_BASES ||
  (location.protocol === "file:" || ["localhost", "127.0.0.1", "::1"].includes(location.hostname)
    ? ["../../kyotei-ai-data/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/main/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/f0b24d6bae082d1b8927a9794c7af98fa7deb05a/data"]
    : ["https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/f0b24d6bae082d1b8927a9794c7af98fa7deb05a/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/main/data"]);
