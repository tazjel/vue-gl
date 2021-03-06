import {findParent, createObjectFromArray} from "./utils.js";

const globalNamespaces = [
    "vglCameras",
    "vglScenes"
];

const localNamespaces = [
    "vglGeometries",
    "vglMaterials"
];

function createEmptyObject() {
    return Object.create(null);
}

function isRoot(vm) {
    return vm.$options.isVglRootNamespace;
}

function pop(str) {
    return str.slice(0, -1);
}

export default {
    isVglNamespace: true,
    beforeCreate() {
        const $options = this.$options;
        if (!findParent(this, "isVglNamespace")) {
            $options.isVglRootNamespace = true;
        }
    },
    provide() {
        const vm = this;
        class Provider {
            constructor(namespace, global) {
                this.n = namespace;
                this.g = global ? "": "_";
            }
            get forGet() {
                return vm[this.n + this.g + this.g];
            }
            get forSet() {
                return vm[this.n + this.g];
            }
        }
        return createObjectFromArray(localNamespaces, (namespace) =>
            new Provider(namespace)
        , isRoot(this) ? createObjectFromArray(globalNamespaces, (namespace) =>
            new Provider(namespace, true)
        ): {});
    },
    inject: createObjectFromArray(localNamespaces, (namespace) => ({
        from: namespace,
        default() {
            return {
                forGet: this[namespace + "__"],
                forSet: this[namespace + "_"]
            };
        }
    })),
    data() {
        return createObjectFromArray(localNamespaces.map((key) => key + "_"), (namespace) =>
            createEmptyObject()
        , isRoot(this) ? createObjectFromArray(globalNamespaces, (namespace) =>
            createEmptyObject()
        ): {});
    },
    computed: createObjectFromArray(localNamespaces.map((key) => key + "__"), (namespace) => function() {
        const single = pop(namespace);
        return isRoot(this) ? this[single]: Object.assign(Object.create(this[pop(single)].forGet), this[single]);
    }),
    render(h) {
        if (this.$slots.default) return h("div", this.$slots.default);
    }
};
