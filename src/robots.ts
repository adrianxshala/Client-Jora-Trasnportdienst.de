export const GET = async () => {
    return new Response(
        `User-agent: *
         Allow: /
         Sitemap: https://www.transport-jora.com/sitemap.xml`,
        {
            headers: {
                "Content-Type": "text/plain",
            },
        }
    );
};
