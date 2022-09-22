import {
  defineDocumentType,
  makeSource,
  defineNestedType,
} from 'contentlayer/source-files'

const Icon = defineNestedType(() => ({
  name: 'Icon',
  fields: {
    title: {
      type: 'string',
    },
    iconName: {
      type: 'string',
    },
    description: {
      type: 'string',
      required: false,
    },
  },
}))

export const Project = defineDocumentType(() => ({
  name: 'Project',
  filePathPattern: 'projects/*.md',
  fields: {
    name: {
      type: 'string',
      description: 'The name of the project',
      required: true,
    },
    date: { type: 'date', required: true },
    description: {
      type: 'string',
      description: 'A description of the project',
      required: true,
    },
    websiteUrl: {
      type: 'string',
      description: 'The URL of the project website',
      required: false,
    },
    githubUrl: {
      type: 'string',
      description: 'The URL of the project GitHub repository',
      required: false,
    },
    iconName: {
      type: 'string',
      description: 'The name of the icon to use for the project',
      required: false,
    },
    image: {
      type: 'string',
      required: false,
    },
    techStack: {
      type: 'list',
      of: Icon,
      required: true,
    },
    duration: {
      type: 'string',
      required: true,
    },
  },
  computedFields: {
    slug: {
      type: 'string',
      resolve: (doc) => doc._raw.sourceFileName.replace('.md', ''),
    },
  },
}))

export const Work = defineDocumentType(() => ({
  name: 'Work',
  filePathPattern: 'work/*.md',
  fields: {
    name: {
      type: 'string',
      description: 'The name of the company',
      required: true,
    },
    date: { type: 'date', required: true },
    description: {
      type: 'string',
      description: 'A description of the company',
      required: true,
    },
    websiteUrl: {
      type: 'string',
      description: 'The URL of the company website',
      required: false,
    },
    githubUrl: {
      type: 'string',
      description: 'The URL of the company GitHub repository',
      required: false,
    },
    iconName: {
      type: 'string',
      description: 'The name of the icon to use for the company',
      required: false,
    },
    image: {
      type: 'string',
      required: false,
    },
    role: {
      type: 'string',
      required: true,
    },
    duration: {
      type: 'string',
      required: true,
    },
    techStack: {
      type: 'list',
      of: Icon,
      required: true,
    },
  },
  computedFields: {
    slug: {
      type: 'string',
      resolve: (doc) => doc._raw.sourceFileName.replace('.md', ''),
    },
  },
}))

export const Skills = defineDocumentType(() => ({
  name: 'Skills',
  filePathPattern: 'skills.md',
  fields: {
    techStack: {
      type: 'list',
      of: Icon,
      required: true,
    },
  },
}))

export default makeSource({
  contentDirPath: './data',
  documentTypes: [Project, Work, Skills],
})
