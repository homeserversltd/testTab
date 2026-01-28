# TestTab - HOMESERVER Premium Tab Framework

## Infinite Army Decomposition System

The Court's infinite army operates through a sophisticated decomposition system that enables parallel execution and hierarchical task management.

### Task Decomposition Table System

When facing complex tasks, the Court uses explicit decomposition to break work into parallel worker streams:

**Explicit Decomposition Requirements:**
- **State Intent Clearly**: Use phrases like "DECOMPOSE INTO N PARALLEL WORKERS" or "You must decompose this task into MULTIPLE WORKERS working in parallel. Do NOT route to a single worker."
- **Define Worker Roles**: Specify what each worker creates:
  ```
  Worker 1 - Core Engine: Create fibonacci_engine.py with...
  Worker 2 - Renderer: Create renderer.py with...
  Worker 3 - Controls: Create controls.py with...
  Worker 4 - Orchestration: Create main.py, requirements.txt, setup_venv.sh...
  ```
- **Specify Output Directory**: Always specify the exact folder path where files should be created
- **Verify Integration**: After workers complete, verify that orchestration files actually import and use the modules created by other workers

**Successful Pattern:**
```
CRITICAL: You must decompose this task into MULTIPLE WORKERS working in parallel.

DECOMPOSE INTO 4 PARALLEL WORKERS:
Worker 1 - Core Engine: Create fibonacci_engine.py with...
Worker 2 - Renderer: Create renderer.py with...
Worker 3 - Controls: Create controls.py with...
Worker 4 - Orchestration: Create main.py that imports all modules...

ALL WORKERS MUST:
- Work in parallel (spawn them simultaneously)
- Output files to /path/to/project/
```

### Asmodeus and Amaymon Hierarchy

**4-Layer Delegation Chain:**
1. **Court**: Provides divine providence and task orchestration
2. **Asmodeus (Divine Commander)**: Routes tasks through the divine hierarchy
3. **Amaymon (Specialist Manager)**: Manages the worker roster and technical precision
4. **Workers**: Execute with complete contextualized instructions

**How Asmodeus and Amaymon Work Together:**
- **Asmodeus Routing**: All delegation goes through Asmodeus (`agent_name: "asmodeus"`) who routes through the divine hierarchy
- **Amaymon Coordination**: Asmodeus hands off to Amaymon for worker management and task specialization
- **Worker Execution**: Amaymon coordinates the worker roster (ornias, notary-tender, cold-storage-tender, cursorwatch-worker, paimon)
- **Result Synthesis**: Results flow back through Asmodeus to the Court for synthesis

### Post-Execution Cleanup

**Ephemeral Worker Pattern:**
- Workers are designed to be ephemeral - they complete their tasks and vanish
- No persistent state is maintained between invocations
- Context is preserved through constitutional frameworks and invocation records
- Clean execution ensures no resource leaks or state pollution

---

## Features

- **Advanced Data Processing**: Pandas and NumPy integration for statistical analysis
- **External API Integration**: HTTP client with timeout and error handling
- **Real-time Analytics**: Live data processing and correlation analysis
- **Health Monitoring**: Dependency checking and system status reporting
- **Modular Architecture**: Clean separation of backend Flask blueprints and frontend React components
- **TypeScript Support**: Full type safety with comprehensive interfaces
- **Professional Styling**: Responsive design with HOMESERVER theme integration

## Architecture

- **Backend**: Flask blueprint with RESTful API endpoints
- **Frontend**: React with TypeScript, custom hooks, and component library
- **Dependencies**: pandas, numpy, httpx, jsonschema, python-dateutil
- **Permissions**: Granular sudoers configuration for system access
- **Deployment**: Automated installation and configuration scripts

## Use Cases

- Premium tab development and testing
- Data analytics and processing demonstrations
- External service integration examples
- HOMESERVER platform extension development
- Professional-grade tab framework reference

## Target Audience

System administrators, developers, and technical professionals building enterprise-grade digital sovereignty solutions with HOMESERVER.