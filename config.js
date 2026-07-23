window.KYOTEI_DATA_BASES =
  window.KYOTEI_DATA_BASES ||
  (location.protocol === "file:" || ["localhost", "127.0.0.1", "::1"].includes(location.hostname)
    ? ["../../kyotei-ai-data/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/main/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/4dc9cc893a31044c05d36596aff4e2a0738d540d/data"]
    : ["https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/4dc9cc893a31044c05d36596aff4e2a0738d540d/data", "https://raw.githubusercontent.com/sinz-collab/kyotei-ai-data/main/data"]);
