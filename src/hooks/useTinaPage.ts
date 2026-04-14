import { useTina } from "tinacms/dist/react";
// @ts-ignore - this file is generated at build time
import { client } from "../../tina/__generated__/client";
import { useEffect, useState } from "react";
import { logErrorSecurely } from "../utils/security";

export const useTinaPage = (relativePath: string) => {
    const [tinaData, setTinaData] = useState<any>(null);

    useEffect(() => {
        const fetchContent = async () => {
            try {
                const response = await client.queries.page({ relativePath });
                setTinaData(response);
            } catch (e) {
                logErrorSecurely("TinaCMS Fetch", e);
            }
        };
        fetchContent();
    }, [relativePath]);

    const { data } = useTina({
        query: tinaData?.query,
        variables: tinaData?.variables,
        data: tinaData?.data,
    });

    return { data, loading: !tinaData };
};
