import { TranslocoConfig } from './transloco.config';
export declare function mergeConfig(defaultConfig: TranslocoConfig, userConfig: Partial<TranslocoConfig>): {
    missingHandler: {
        useFallbackTranslation?: boolean;
        allowEmpty?: boolean;
    };
    flatten: {
        aot?: boolean;
    };
    defaultLang: string;
    reRenderOnLangChange?: boolean;
    prodMode?: boolean;
    fallbackLang?: string | string[];
    failedRetries?: number;
    scopeMapping?: import("./types").HashMap<string>;
    availableLangs?: import("./types").AvailableLangs;
};
