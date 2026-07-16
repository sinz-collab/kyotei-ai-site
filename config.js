window.KYOTEI_DATA_BASES =
  window.KYOTEI_DATA_BASES ||
  (location.protocol === "file:" || ["localhost", "127.0.0.1", "::1"].includes(location.hostname)
    ? ["../../kyotei-ai-data/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/504a18544a3ff3e3e569e0cec15b2d82806a398f/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/main/data"]
    : ["https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/504a18544a3ff3e3e569e0cec15b2d82806a398f/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/main/data"]);
