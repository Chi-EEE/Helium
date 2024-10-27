/*
type ActionCreatorFunction = (...args: any[]) => Map<any, any>;
// Can call
interface ActionCreatorTable {
    ActionName: string;
    Name: string;
}

interface HeliumConfiguration {
    // Enables `debug.profilebegin` in the component redraw function.
    ProfileRedraw: boolean;
    // Enables type checking internally.
    RunTypeChecking: boolean,
    // Runs an `assert` check when `QueueRedraw` is called to validate that a component's RedrawBinding is correct.
    SafeRedrawCheck: boolean;
    // Enables using the V2 version of `CombineReducers`.
    UseCombineReducersV2: boolean;
    // Enables using a switch statement for `QueueRedraw`. This won't be checked every `QueueRedraw` since performance is the goal here, only when `Component:Constructor` is called.
    UseSwitchStatementForQueueRedraw: boolean;
}

type BaseAction = { Type: unknown } & Record<string, unknown>;

export = Helium;
export as namespace Helium;

declare namespace Helium {
    function ReducerFunction(Action: BaseAction, GetState: (...args: any[]) => any, SetState: (...args: any[]) => () => void): () => any;

    class GlobalConfiguration {
        public static Get(): HeliumConfiguration;
        public static Set(ConfigurationValues: HeliumConfiguration): void;
        public static Scoped(ConfigurationValues: HeliumConfiguration, Function: () => any): void;
    }

    function SetGlobalConfiguration(ConfigurationValues: HeliumConfiguration): void;
    function SetGlobalConfig(ConfigurationValues: HeliumConfiguration): void;
    function SetConfiguration(ConfigurationValues: HeliumConfiguration): void;
    function SetConfig(ConfigurationValues: HeliumConfiguration): void;

    function CreateStore(Reducer: any, InitialState: any): Store;
    function CombineReducers(): (Action: any, GetState: any, SetState: any) => any;
    function MakeActionCreator(ActionName: string, Function: ActionCreatorFunction): ActionCreatorTable;
    class Store {
        constructor();
        ApplyMiddleWare(MiddleWare: any): void;
        Fire(Action: ActionCreatorTable): void;
    }

    class ComponentConstructor {
        static Extend(name: string): Component;
    }

    abstract class Component {
        constructor();
        public abstract Constructor(...args: any[]): void;
        // Destroys the Component and its Janitor.
        // This renders the component completely unusable. You wont' be able to call any further methods on it.
        public Destroy(): void;
        // The Component's Redraw function. This can be overwritten if you need it to be.
        public Redraw(): void;
        // This function returns the reduced state of the component's store.
        public GetReducedState: () => Map<string, string>;
        // The Component's ClassName, which is assigned from the first argument of `Component.Extend`.
        public ClassName: string;
        // The Component's RedrawBinding. This is used to determine when the Component's `:Redraw()` function is called.
        public RedrawBinding: RedrawBinding;
        // The reduction of the store. If this exists, it'll be passed as the first argument of `:Redraw()`.
        public Reduction: Map<string, string> | undefined;
        // The Destroyed signal which is called after everything in the Component is destroyed. This only exists if you explicitly state you want it in the `Component.Extend` function.
        public Destroyed: RBXScriptConnection;
        // The Destroying signal which is called immediately after `:Destroy` is. This only exists if you explicitly state you want it in the `Component.Extend` function.
        public Destroying: RBXScriptConnection;
        // The WillRedraw signal which is called immediately before `Component:Redraw` is. This only exists if you explicitly state you want it in the `Component.Extend` function.
        public WillRedraw: RBXScriptConnection;
        // The DidRedraw signal which is called immediately after `Component:Redraw` is. This only exists if you explicitly state you want it in the `Component.Extend` function.
        public DidRedraw: RBXScriptConnection;
        // This function queues a redraw of the component.
        public QueueRedraw: () => () => any;
    }

    // An Enum representing on which binding the Component will be redrawn on.
    enum RedrawBinding {
        // Redraw on the next `Heartbeat` step.
        Heartbeat,
        // Redraw on the next `RenderStep` step.
        RenderStep,
        // Redraw on two `RenderStep` steps.
        RenderStepTwice,
        // Redraw on the next `Stepped` step.
        Stepped
    }

    class Make {
        static Make(ClassName: string, Properties: Map<string, any>): Instance;
    }

    class Janitor {
        static Is(Object: any): boolean;

        constructor();
        Add(Object: any, MethodName: string | true): void;
        Remove(Index: any): Janitor;
        Get(Index: any): any | undefined;
        Cleanup(): void;
        Destroy(): void;

        LinkToInstance(Object: InstanceConstructor, AllowMultiple: boolean | undefined): RBXScriptConnection;
        LinkToInstances(...Objects: Instance[]): RBXScriptConnection;
    }

    class Middleware {
        public static InspectorMiddleware:
            () => (
                NextMiddleware: (Action: BaseAction) => () => any
            ) => any;
        public static LoggerMiddleware: any;
        public static SpunkMiddleware: any;
        public static ThunkMiddleware: any;
    }
}
*/
export namespace a {
    abstract class AbstractClass<T> {
        // Abstract method that subclasses must implement
        abstract someMethod(param: T): void;

        // Concrete method that can be used by subclasses
        concreteMethod() {
        }
    }
    // Factory function to create a subclass
    function createSubclass<T>() {
        return class extends AbstractClass<T> {
            // Implement the abstract method
            someMethod(param: T): void {
                console.log('Implementing someMethod with param:', param);
            }
        };
    }
}
