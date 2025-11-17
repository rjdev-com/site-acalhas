import { useState, useEffect } from 'react';
import { supabase } from '../lib/supabase';

interface PageContent {
  [key: string]: string | null;
}

export function usePageContent(pageName: string) {
  const [content, setContent] = useState<PageContent>({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    loadContent();
  }, [pageName]);

  const loadContent = async () => {
    try {
      setError(null);
      const { data, error: queryError } = await supabase
        .from('page_content')
        .select('section_key, content_value')
        .eq('page_name', pageName);

      if (queryError) {
        console.error('Erro ao carregar conteúdo:', queryError);
        setError(queryError.message);
        setLoading(false);
        return;
      }

      const contentMap: PageContent = {};
      data?.forEach(item => {
        contentMap[item.section_key] = item.content_value;
      });

      setContent(contentMap);
    } catch (err) {
      console.error('Erro ao carregar conteúdo:', err);
      setError(err instanceof Error ? err.message : 'Erro desconhecido');
    } finally {
      setLoading(false);
    }
  };

  const getContent = (key: string, defaultValue: string = ''): string => {
    const value = content[key];
    if (value === null || value === undefined || value === '') {
      return defaultValue;
    }
    return value;
  };

  return { content, loading, error, getContent };
}
