window.KYOTEI_DATA_BASES =
  window.KYOTEI_DATA_BASES ||
  (location.protocol === "file:" || ["localhost", "127.0.0.1", "::1"].includes(location.hostname)
    ? ["../../kyotei-ai-data/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/main/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/99f3ded691495e46ac2c132120d68b0a13259a8e/data"]
    : ["https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/99f3ded691495e46ac2c132120d68b0a13259a8e/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/main/data"]);
