import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { Icon } from '../../shared/icon';

/**
 * Architecture / pipeline visuals for the featured projects.
 * Every label maps to a technology or step named in the CV project description.
 */
@Component({
  selector: 'app-diagram',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [Icon],
  templateUrl: './diagram.html',
  styleUrl: './diagram.scss',
})
export class Diagram {
  readonly type = input.required<'ecommerce' | 'rag'>();

  protected readonly ragIndexing = [
    { icon: 'file', title: 'Receipts', sub: 'Unstructured documents' },
    { icon: 'scan', title: 'OCR', sub: 'Text extraction' },
    { icon: 'vector', title: 'Embeddings', sub: 'Sentence Transformers' },
    { icon: 'database', title: 'Vector Store', sub: 'ChromaDB' },
  ];

  protected readonly ragQuery = [
    { icon: 'message', title: 'Question', sub: 'Natural language' },
    { icon: 'search', title: 'Semantic Search', sub: 'Vector retrieval' },
    { icon: 'cpu', title: 'LLM + Context', sub: 'Ollama' },
    { icon: 'check', title: 'Answer', sub: 'Context-aware' },
  ];

  protected readonly servicePatterns = ['Clean Architecture', 'Repository Pattern', 'Unit of Work', 'Dependency Injection', 'Entity Framework'];
}
