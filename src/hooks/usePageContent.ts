import { useState, useEffect } from 'react';
import { supabase } from '../lib/supabase';

interface PageContent {
  [key: string]: string | null;
}

export function usePageContent(pageName: string) {
  const [content, setContent] = useState<PageContent>({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadContent();
  }, [pageName]);

  const loadContent = async () => {
    try {
      const { data, error } = await supabase
        .from('page_content')
        .select('section_key, content_value')
        .eq('page_name', pageName);

      if (error) throw error;

      const contentMap: PageContent = {};
      data?.forEach(item => {
        contentMap[item.section_key] = item.content_value;
      });

      setContent(contentMap);
    } catch (error) {
      console.error('Erro ao carregar conteúdo:', error);
    } finally {
      setLoading(false);
    }
  };

  const get = (key: string, defaultValue: string = ''): string => {
    return content[key] || defaultValue;
  };

  return { content, loading, get };
}
