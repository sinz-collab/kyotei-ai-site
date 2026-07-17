window.KYOTEI_DATA_BASES =
  window.KYOTEI_DATA_BASES ||
  (location.protocol === "file:" || ["localhost", "127.0.0.1", "::1"].includes(location.hostname)
    ? ["../../kyotei-ai-data/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/4d4b130002c2eb821700d6cdae0b12f59c9be7c9/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/main/data"]
    : ["https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/4d4b130002c2eb821700d6cdae0b12f59c9be7c9/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/main/data"]);
