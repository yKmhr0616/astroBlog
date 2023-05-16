// Place any global data in this file.
// You can import this data from anywhere in your site by using the `import` keyword.
type GlobalNavPath = {
    linecap: astroHTML.JSX.SVGAttributes["stroke-linecap"]
    linejoin: astroHTML.JSX.SVGAttributes["stroke-linejoin"]
    d: astroHTML.JSX.SVGAttributes["d"]
}

type GlobalNav = {
    text: string
    href: string
    path: GlobalNavPath
}

export const SITE_TITLE = 'Web開発ログ'
export const SITE_DESCRIPTION = '主にフロントエンド開発ポートフォリオ兼備忘録になります。'

export const GLOBAL_NAV : GlobalNav[] = [
    {
        text: 'ホーム',
        href: '/',
        path: {
            linecap: 'round',
            linejoin: 'round',
            d: 'M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25',
        },
    },
    {
        text: 'このサイトについて',
        href: '/about/',
        path: {
            linecap: 'round',
            linejoin: 'round',
            d: 'M12 18v-5.25m0 0a6.01 6.01 0 001.5-.189m-1.5.189a6.01 6.01 0 01-1.5-.189m3.75 7.478a12.06 12.06 0 01-4.5 0m3.75 2.383a14.406 14.406 0 01-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 10-7.517 0c.85.493 1.509 1.333 1.509 2.316V18',
        },
    },

    {
        text: 'ブログ',
        href: '/blog/',
        path: {
            linecap: 'round',
            linejoin: 'round',
            d: 'M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m2.25 0H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z',
        },
    },
]
