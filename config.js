window.KYOTEI_DATA_BASES =
  window.KYOTEI_DATA_BASES ||
  (location.protocol === "file:" || ["localhost", "127.0.0.1", "::1"].includes(location.hostname)
    ? ["../../kyotei-ai-data/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/d75e847832c53ca4d42e1d63901690c0cfd60e96/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/main/data"]
    : ["https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/d75e847832c53ca4d42e1d63901690c0cfd60e96/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/main/data"]);
