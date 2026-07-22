window.KYOTEI_DATA_BASES =
  window.KYOTEI_DATA_BASES ||
  (location.protocol === "file:" || ["localhost", "127.0.0.1", "::1"].includes(location.hostname)
    ? ["../../kyotei-ai-data/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/main/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/1f07a448ad7761448511c2f095ddb6774433e46a/data"]
    : ["https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/1f07a448ad7761448511c2f095ddb6774433e46a/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/main/data"]);
